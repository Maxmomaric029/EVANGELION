import pygame
import random
import time
import math

# Inicializar Pygame
pygame.init()

# --- CONFIGURACIÓN ---
ANCHO_VENTANA = 1280
ALTO_VENTANA = 720
TILE_SIZE = 32
FPS = 60

ANCHO_MAPA = 60
ALTO_MAPA = 45

# Colores
NEGRO = (0, 0, 0)
NEGRO_FONDO = (15, 15, 20)
BLANCO = (255, 255, 255)
GRIS_OSCURO = (40, 40, 40)
GRIS_EXPLORADO = (60, 60, 75)
SUELO = (46, 46, 56)
SUELO_CLARO = (56, 56, 66)
ROJO = (220, 50, 50)
ROJO_SANGRE = (180, 20, 20)
VERDE = (50, 200, 50)
AZUL_UI = (50, 150, 220)
AMARILLO = (255, 215, 0)
MORADO = (160, 80, 200)

class Camera:
    def __init__(self, ancho, alto):
        self.camera = pygame.Rect(0, 0, ancho, alto)
        self.ancho = ancho
        self.alto = alto

    def aplicar(self, entidad):
        return entidad.rect.move(self.camera.topleft)

    def aplicar_rect(self, rect):
        return rect.move(self.camera.topleft)

    def actualizar(self, objetivo):
        x = -objetivo.rect.centerx + int(self.ancho / 2)
        y = -objetivo.rect.centery + int(self.alto / 2)
        
        # Limitar la cámara a los bordes del mapa
        x = min(0, x)
        y = min(0, y)
        x = max(-(ANCHO_MAPA * TILE_SIZE - self.ancho), x)
        y = max(-(ALTO_MAPA * TILE_SIZE - self.alto), y)
        
        # Suavizado de cámara (Lerp)
        self.camera.x += (x - self.camera.x) * 0.1
        self.camera.y += (y - self.camera.y) * 0.1

class TextoFlotante:
    def __init__(self, x, y, texto, color, tamaño=20):
        self.x = x
        self.y = y
        self.texto = texto
        self.color = color
        self.vida = 60
        self.fuente = pygame.font.Font(None, tamaño)
        self.offset_y = 0

    def actualizar(self):
        self.vida -= 1
        self.offset_y -= 0.5 # Flota hacia arriba

    def dibujar(self, superficie, camara):
        if self.vida > 0:
            pos_x = self.x + camara.camera.x
            pos_y = self.y + camara.camera.y + self.offset_y
            
            # Efecto de desvanecimiento
            alpha = min(255, self.vida * 5)
            surf = self.fuente.render(str(self.texto), True, self.color)
            surf.set_alpha(alpha)
            
            # Sombra del texto
            sombra = self.fuente.render(str(self.texto), True, NEGRO)
            sombra.set_alpha(alpha)
            
            superficie.blit(sombra, (pos_x + 2, pos_y + 2))
            superficie.blit(surf, (pos_x, pos_y))

class Entidad(pygame.sprite.Sprite):
    def __init__(self, x, y, color, nombre, vida, daño, defensa):
        super().__init__()
        self.tile_x = x
        self.tile_y = y
        self.rect = pygame.Rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        self.color = color
        self.nombre = nombre
        self.vida_max = vida
        self.vida = vida
        self.daño_base = daño
        self.defensa_base = defensa
        self.direccion = 1 # 1 derecha, -1 izquierda

    def mover(self, dx, dy, mapa_data):
        nuevo_x = self.tile_x + dx
        nuevo_y = self.tile_y + dy
        
        if dx > 0: self.direccion = 1
        if dx < 0: self.direccion = -1
        
        if 0 <= nuevo_x < ANCHO_MAPA and 0 <= nuevo_y < ALTO_MAPA:
            # Comprobar colisión con muros ('#')
            if mapa_data[nuevo_y][nuevo_x] != '#':
                self.tile_x = nuevo_x
                self.tile_y = nuevo_y
                self.rect.x = nuevo_x * TILE_SIZE
                self.rect.y = nuevo_y * TILE_SIZE
                return True
        return False

    def dibujar(self, superficie, camara, es_visible):
        if not es_visible: return
        
        pos = camara.aplicar(self)
        
        # Sombra
        pygame.draw.ellipse(superficie, (0,0,0, 100), (pos.x + 4, pos.y + TILE_SIZE - 8, TILE_SIZE - 8, 6))
        
        # Cuerpo
        pygame.draw.rect(superficie, self.color, (pos.x + 4, pos.y + 4, TILE_SIZE - 8, TILE_SIZE - 8), border_radius=4)
        
        # Ojos (para dar dirección)
        ojo_x = pos.x + (20 if self.direccion == 1 else 8)
        pygame.draw.rect(superficie, BLANCO, (ojo_x, pos.y + 10, 4, 4))
        
        # Barra de vida
        if self.vida < self.vida_max:
            porcentaje = self.vida / self.vida_max
            pygame.draw.rect(superficie, NEGRO, (pos.x, pos.y - 6, TILE_SIZE, 4))
            pygame.draw.rect(superficie, VERDE if porcentaje > 0.5 else ROJO, (pos.x, pos.y - 6, int(TILE_SIZE * porcentaje), 4))

class Jugador(Entidad):
    def __init__(self, x, y):
        super().__init__(x, y, (0, 191, 255), "Héroe", 100, 12, 2)
        self.nivel = 1
        self.exp = 0
        self.exp_siguiente = 100
        self.oro = 0
        self.inventario = []
        self.equipo = {'arma': None, 'armadura': None}
        self.vision_radio = 8

    def atacar(self, objetivo):
        # Calculo de daño con crítico
        es_critico = random.random() < 0.15 # 15% prob critico
        daño = self.daño_base + (self.equipo['arma'].stats if self.equipo['arma'] else 0)
        
        if es_critico:
            daño = int(daño * 1.5)
        
        defensa = objetivo.defensa_base
        daño_final = max(1, daño - defensa)
        
        objetivo.vida -= daño_final
        return daño_final, es_critico

class Enemigo(Entidad):
    def __init__(self, x, y, dificultad=1):
        tipos = [
            {'nombre': 'Rata Gigante', 'color': (100, 100, 100), 'vida': 20, 'daño': 4, 'exp': 10},
            {'nombre': 'Goblin', 'color': (50, 150, 50), 'vida': 35, 'daño': 7, 'exp': 20},
            {'nombre': 'Esqueleto', 'color': (200, 200, 200), 'vida': 45, 'daño': 10, 'exp': 35},
            {'nombre': 'Orco', 'color': (100, 60, 20), 'vida': 70, 'daño': 15, 'exp': 60}
        ]
        
        idx = min(len(tipos)-1, random.randint(0, dificultad))
        stats = tipos[idx]
        
        super().__init__(x, y, stats['color'], stats['nombre'], stats['vida'], stats['daño'], 1)
        self.exp_drop = stats['exp']
        self.oro_drop = random.randint(2, stats['exp'])

class Item:
    def __init__(self, x, y, nombre, tipo, stats, precio):
        self.tile_x = x
        self.tile_y = y
        self.nombre = nombre
        self.tipo = tipo # 'arma', 'armadura', 'pocion'
        self.stats = stats
        self.precio = precio
        self.rect = pygame.Rect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE)
        self.anim_offset = 0

    def dibujar(self, superficie, camara, visible):
        if not visible: return
        pos = camara.aplicar_rect(self.rect)
        
        self.anim_offset = math.sin(time.time() * 5) * 3
        
        color = AMARILLO if self.tipo == 'arma' else (BLANCO if self.tipo == 'armadura' else ROJO)
        
        # Brillo
        surf_brillo = pygame.Surface((TILE_SIZE, TILE_SIZE), pygame.SRCALPHA)
        pygame.draw.circle(surf_brillo, (*color, 50), (16, 16 + int(self.anim_offset)), 10)
        superficie.blit(surf_brillo, pos)
        
        # Item
        pygame.draw.circle(superficie, color, (pos.centerx, pos.centery + int(self.anim_offset)), 6)
        pygame.draw.circle(superficie, NEGRO, (pos.centerx, pos.centery + int(self.anim_offset)), 6, 1)

class Juego:
    def __init__(self):
        self.pantalla = pygame.display.set_mode((ANCHO_VENTANA, ALTO_VENTANA))
        pygame.display.set_caption("Roguelike Mejorado - Python")
        self.reloj = pygame.time.Clock()
        self.fuente = pygame.font.SysFont("Arial", 18)
        self.fuente_grande = pygame.font.SysFont("Arial", 32, bold=True)
        
        self.estado = "JUGANDO"
        self.mapa = []
        self.jugador = None
        self.enemigos = []
        self.items = []
        self.textos_flotantes = []
        self.mensajes = ["¡Bienvenido a la mazmorra!"]
        
        self.camara = Camera(ANCHO_VENTANA, ALTO_VENTANA)
        self.mapa_explorado = set()
        self.tiles_visibles = set()
        
        self.generar_nivel()

    def generar_nivel(self):
        # 1. Generación de Cueva usando Autómatas Celulares
        self.mapa = [['#' if random.random() < 0.45 else '.' for _ in range(ANCHO_MAPA)] for _ in range(ALTO_MAPA)]
        
        for _ in range(4): # Suavizar el mapa 4 veces
            nuevo_mapa = [['#' for _ in range(ANCHO_MAPA)] for _ in range(ALTO_MAPA)]
            for y in range(1, ALTO_MAPA-1):
                for x in range(1, ANCHO_MAPA-1):
                    # Contar vecinos muros
                    muros = 0
                    for dy in [-1,0,1]:
                        for dx in [-1,0,1]:
                            if self.mapa[y+dy][x+dx] == '#': muros += 1
                    
                    if self.mapa[y][x] == '#':
                        nuevo_mapa[y][x] = '#' if muros >= 4 else '.'
                    else:
                        nuevo_mapa[y][x] = '#' if muros >= 5 else '.'
            self.mapa = nuevo_mapa

        # Bordes indestructibles
        for y in range(ALTO_MAPA):
            self.mapa[y][0] = self.mapa[y][ANCHO_MAPA-1] = '#'
        for x in range(ANCHO_MAPA):
            self.mapa[0][x] = self.mapa[ALTO_MAPA-1][x] = '#'

        # 2. Colocar Entidades
        suelos_libres = []
        for y in range(ALTO_MAPA):
            for x in range(ANCHO_MAPA):
                if self.mapa[y][x] == '.':
                    suelos_libres.append((x, y))
        
        random.shuffle(suelos_libres)
        
        # Jugador
        start_pos = suelos_libres.pop()
        self.jugador = Jugador(*start_pos)
        self.camara.camera.x = -start_pos[0]*TILE_SIZE + ANCHO_VENTANA//2
        self.camara.camera.y = -start_pos[1]*TILE_SIZE + ALTO_VENTANA//2
        
        # Enemigos
        self.enemigos = []
        for _ in range(15):
            pos = suelos_libres.pop()
            self.enemigos.append(Enemigo(pos[0], pos[1], dificultad=random.randint(0,2)))
            
        # Items
        self.items = []
        for _ in range(10):
            pos = suelos_libres.pop()
            if random.random() < 0.5:
                self.items.append(Item(pos[0], pos[1], "Poción Salud", 'pocion', 30, 20))
            else:
                arma_stats = random.randint(3, 8)
                self.items.append(Item(pos[0], pos[1], f"Espada +{arma_stats}", 'arma', arma_stats, 50))

        self.mapa_explorado = set()
        self.actualizar_fov()

    def actualizar_fov(self):
        self.tiles_visibles = set()
        radio = self.jugador.vision_radio
        
        # Algoritmo simple de distancia (Raycasting sería mejor pero más complejo)
        for y in range(self.jugador.tile_y - radio, self.jugador.tile_y + radio + 1):
            for x in range(self.jugador.tile_x - radio, self.jugador.tile_x + radio + 1):
                if 0 <= x < ANCHO_MAPA and 0 <= y < ALTO_MAPA:
                    dist = math.sqrt((x - self.jugador.tile_x)**2 + (y - self.jugador.tile_y)**2)
                    if dist <= radio:
                        # Trazar línea simple para ver si hay muros bloqueando
                        bloqueado = False
                        pasos = int(dist * 2)
                        if pasos > 0:
                            for i in range(pasos):
                                tx = self.jugador.tile_x + (x - self.jugador.tile_x) * (i/pasos)
                                ty = self.jugador.tile_y + (y - self.jugador.tile_y) * (i/pasos)
                                if self.mapa[int(ty)][int(tx)] == '#':
                                    bloqueado = True
                                    break
                        
                        if not bloqueado:
                            self.tiles_visibles.add((x, y))
                            self.mapa_explorado.add((x, y))

    def agregar_mensaje(self, texto, color=BLANCO):
        self.mensajes.append((texto, color, time.time()))
        if len(self.mensajes) > 6:
            self.mensajes.pop(0)

    def turno_jugador(self, dx, dy):
        if self.estado != "JUGANDO": return
        
        dest_x = self.jugador.tile_x + dx
        dest_y = self.jugador.tile_y + dy
        
        # Atacar?
        enemigo_objetivo = None
        for e in self.enemigos:
            if e.tile_x == dest_x and e.tile_y == dest_y:
                enemigo_objetivo = e
                break
        
        if enemigo_objetivo:
            daño, crit = self.jugador.atacar(enemigo_objetivo)
            color_dmg = AMARILLO if crit else BLANCO
            texto = f"{daño}!" if crit else str(daño)
            self.textos_flotantes.append(TextoFlotante(enemigo_objetivo.rect.x, enemigo_objetivo.rect.y, texto, color_dmg, 30 if crit else 20))
            self.agregar_mensaje(f"Golpeas a {enemigo_objetivo.nombre} por {daño}", BLANCO)
            
            if enemigo_objetivo.vida <= 0:
                self.enemigos.remove(enemigo_objetivo)
                self.jugador.exp += enemigo_objetivo.exp_drop
                self.jugador.oro += enemigo_objetivo.oro_drop
                self.agregar_mensaje(f"¡{enemigo_objetivo.nombre} muere! +{enemigo_objetivo.exp_drop} EXP", AMARILLO)
                self.check_nivel()
        else:
            if self.jugador.mover(dx, dy, self.mapa):
                # Recoger items
                item_recogido = None
                for item in self.items:
                    if item.tile_x == self.jugador.tile_x and item.tile_y == self.jugador.tile_y:
                        item_recogido = item
                        break
                
                if item_recogido:
                    if item_recogido.tipo == 'pocion':
                        curacion = item_recogido.stats
                        self.jugador.vida = min(self.jugador.vida_max, self.jugador.vida + curacion)
                        self.textos_flotantes.append(TextoFlotante(self.jugador.rect.x, self.jugador.rect.y, f"+{curacion}", VERDE))
                        self.agregar_mensaje("¡Poción consumida!", VERDE)
                    elif item_recogido.tipo == 'arma':
                        self.jugador.equipo['arma'] = item_recogido
                        self.agregar_mensaje(f"Equipado: {item_recogido.nombre}", AZUL_UI)
                    self.items.remove(item_recogido)

        self.actualizar_fov()
        self.turno_enemigos()

    def check_nivel(self):
        if self.jugador.exp >= self.jugador.exp_siguiente:
            self.jugador.nivel += 1
            self.jugador.exp -= self.jugador.exp_siguiente
            self.jugador.exp_siguiente = int(self.jugador.exp_siguiente * 1.5)
            self.jugador.vida_max += 10
            self.jugador.vida = self.jugador.vida_max
            self.jugador.daño_base += 2
            self.textos_flotantes.append(TextoFlotante(self.jugador.rect.x, self.jugador.rect.y - 20, "¡NIVEL UP!", AMARILLO, 40))
            self.agregar_mensaje(f"¡Has alcanzado el nivel {self.jugador.nivel}!", AMARILLO)

    def turno_enemigos(self):
        for enemigo in self.enemigos:
            dist = math.sqrt((self.jugador.tile_x - enemigo.tile_x)**2 + (self.jugador.tile_y - enemigo.tile_y)**2)
            
            if dist < 8: # Solo se mueven si están cerca
                if dist < 1.5: # Atacar
                    if random.random() < 0.8: # Probabilidad de acierto
                        daño = max(0, enemigo.daño_base - self.jugador.defensa_base)
                        self.jugador.vida -= daño
                        self.textos_flotantes.append(TextoFlotante(self.jugador.rect.x, self.jugador.rect.y, f"-{daño}", ROJO))
                        self.agregar_mensaje(f"{enemigo.nombre} te golpea por {daño}", ROJO)
                    else:
                        self.textos_flotantes.append(TextoFlotante(self.jugador.rect.x, self.jugador.rect.y, "Miss", GRIS_OSCURO))
                else:
                    # IA muy simple: moverse hacia el jugador
                    dx = 1 if self.jugador.tile_x > enemigo.tile_x else -1 if self.jugador.tile_x < enemigo.tile_x else 0
                    dy = 1 if self.jugador.tile_y > enemigo.tile_y else -1 if self.jugador.tile_y < enemigo.tile_y else 0
                    
                    # Intentar mover en eje X primero, luego Y si falla, para evitar atascos simples
                    if dx != 0 and not enemigo.mover(dx, 0, self.mapa):
                        enemigo.mover(0, dy, self.mapa)
                    elif dy != 0:
                        enemigo.mover(0, dy, self.mapa)

        if self.jugador.vida <= 0:
            self.estado = "GAME_OVER"

    def dibujar(self):
        self.pantalla.fill(NEGRO_FONDO)
        self.camara.actualizar(self.jugador)
        
        # 1. Dibujar Mapa (Solo visible o explorado)
        # Optimizacion: Solo dibujar tiles dentro de la pantalla
        inicio_x = max(0, int(-self.camara.camera.x / TILE_SIZE))
        fin_x = min(ANCHO_MAPA, int((-self.camara.camera.x + ANCHO_VENTANA) / TILE_SIZE) + 2)
        inicio_y = max(0, int(-self.camara.camera.y / TILE_SIZE))
        fin_y = min(ALTO_MAPA, int((-self.camara.camera.y + ALTO_VENTANA) / TILE_SIZE) + 2)

        for y in range(inicio_y, fin_y):
            for x in range(inicio_x, fin_x):
                visible = (x, y) in self.tiles_visibles
                explorado = (x, y) in self.mapa_explorado
                
                if visible:
                    color = GRIS_OSCURO if self.mapa[y][x] == '#' else SUELO_CLARO
                    if self.mapa[y][x] == '.':
                        # Variación sutil de suelo
                        if (x+y)%3 == 0: color = tuple(c-5 for c in SUELO_CLARO)
                    rect = pygame.Rect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE)
                    rect = self.camara.aplicar_rect(rect)
                    pygame.draw.rect(self.pantalla, color, rect)
                elif explorado:
                    color = (20, 20, 25) if self.mapa[y][x] == '#' else SUELO
                    rect = pygame.Rect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE)
                    rect = self.camara.aplicar_rect(rect)
                    pygame.draw.rect(self.pantalla, color, rect)

        # 2. Dibujar Entidades (Solo si son visibles)
        for item in self.items:
            item.dibujar(self.pantalla, self.camara, (item.tile_x, item.tile_y) in self.tiles_visibles)
            
        for enemigo in self.enemigos:
            enemigo.dibujar(self.pantalla, self.camara, (enemigo.tile_x, enemigo.tile_y) in self.tiles_visibles)
            
        self.jugador.dibujar(self.pantalla, self.camara, True)

        # 3. Textos Flotantes
        for txt in self.textos_flotantes:
            txt.dibujar(self.pantalla, self.camara)

        # 4. Interfaz de Usuario (UI)
        self.dibujar_ui()

        pygame.display.flip()

    def dibujar_ui(self):
        # Barra inferior
        pygame.draw.rect(self.pantalla, (20, 20, 25), (0, ALTO_VENTANA - 120, ANCHO_VENTANA, 120))
        pygame.draw.line(self.pantalla, GRIS_OSCURO, (0, ALTO_VENTANA - 120), (ANCHO_VENTANA, ALTO_VENTANA - 120), 2)
        
        # Stats
        x_base = 20
        y_base = ALTO_VENTANA - 100
        
        # Vida
        pygame.draw.rect(self.pantalla, ROJO_SANGRE, (x_base, y_base, 200, 20))
        pct_vida = max(0, self.jugador.vida / self.jugador.vida_max)
        pygame.draw.rect(self.pantalla, ROJO, (x_base, y_base, 200 * pct_vida, 20))
        texto_vida = self.fuente.render(f"HP: {self.jugador.vida}/{self.jugador.vida_max}", True, BLANCO)
        self.pantalla.blit(texto_vida, (x_base + 5, y_base + 2))
        
        # Info Nivel
        texto_info = self.fuente.render(f"Nvl: {self.jugador.nivel} | Exp: {self.jugador.exp}/{self.jugador.exp_siguiente} | Oro: {self.jugador.oro}", True, AMARILLO)
        self.pantalla.blit(texto_info, (x_base, y_base + 30))
        
        # Equipo
        arma_txt = self.jugador.equipo['arma'].nombre if self.jugador.equipo['arma'] else "Puños"
        texto_equipo = self.fuente.render(f"Arma: {arma_txt} (Dmg: {self.jugador.daño_base} + {self.jugador.equipo['arma'].stats if self.jugador.equipo['arma'] else 0})", True, BLANCO)
        self.pantalla.blit(texto_equipo, (x_base, y_base + 60))

        # Log de mensajes
        x_log = 400
        for i, msj in enumerate(reversed(self.mensajes)):
            texto, color, t_creacion = msj
            if isinstance(msj, tuple): # Compatibilidad
                alpha = max(0, 255 - int((time.time() - t_creacion) * 50))
                if alpha > 0:
                    surf = self.fuente.render(f"> {texto}", True, color)
                    surf.set_alpha(alpha)
                    self.pantalla.blit(surf, (x_log, ALTO_VENTANA - 30 - (i * 20)))

        # Tooltip simple al pasar mouse
        mx, my = pygame.mouse.get_pos()
        cam_x, cam_y = self.camara.camera.x, self.camara.camera.y
        world_x = (mx - cam_x) // TILE_SIZE
        world_y = (my - cam_y) // TILE_SIZE
        
        tile_hover = (world_x, world_y)
        
        if tile_hover in self.tiles_visibles:
            entidad_hover = None
            for e in self.enemigos:
                if e.tile_x == world_x and e.tile_y == world_y:
                    entidad_hover = e
                    break
            
            if entidad_hover:
                tooltip = f"{entidad_hover.nombre} [HP: {entidad_hover.vida}]"
                surf_tool = self.fuente.render(tooltip, True, ROJO)
                bg_rect = surf_tool.get_rect(topleft=(mx + 15, my))
                pygame.draw.rect(self.pantalla, NEGRO, bg_rect.inflate(10, 6))
                self.pantalla.blit(surf_tool, (mx + 15, my))

        # Pantalla Game Over
        if self.estado == "GAME_OVER":
            s = pygame.Surface((ANCHO_VENTANA, ALTO_VENTANA))
            s.set_alpha(200)
            s.fill(NEGRO)
            self.pantalla.blit(s, (0,0))
            
            txt_go = self.fuente_grande.render("HAS MUERTO", True, ROJO)
            txt_restart = self.fuente.render("Presiona R para reiniciar o ESC para salir", True, BLANCO)
            
            rect_go = txt_go.get_rect(center=(ANCHO_VENTANA//2, ALTO_VENTANA//2 - 20))
            rect_re = txt_restart.get_rect(center=(ANCHO_VENTANA//2, ALTO_VENTANA//2 + 30))
            
            self.pantalla.blit(txt_go, rect_go)
            self.pantalla.blit(txt_restart, rect_re)

    def correr(self):
        corriendo = True
        while corriendo:
            self.reloj.tick(FPS)
            
            # Actualizar textos flotantes
            for txt in self.textos_flotantes[:]:
                txt.actualizar()
                if txt.vida <= 0:
                    self.textos_flotantes.remove(txt)

            for evento in pygame.event.get():
                if evento.type == pygame.QUIT:
                    corriendo = False
                
                if evento.type == pygame.KEYDOWN:
                    if self.estado == "GAME_OVER":
                        if evento.key == pygame.K_r:
                            self.__init__() # Reiniciar
                        elif evento.key == pygame.K_ESCAPE:
                            corriendo = False
                    elif self.estado == "JUGANDO":
                        dx, dy = 0, 0
                        if evento.key == pygame.K_w or evento.key == pygame.K_UP: dy = -1
                        elif evento.key == pygame.K_s or evento.key == pygame.K_DOWN: dy = 1
                        elif evento.key == pygame.K_a or evento.key == pygame.K_LEFT: dx = -1
                        elif evento.key == pygame.K_d or evento.key == pygame.K_RIGHT: dx = 1
                        elif evento.key == pygame.K_ESCAPE: corriendo = False
                        
                        if dx != 0 or dy != 0:
                            self.turno_jugador(dx, dy)

            self.dibujar()
        
        pygame.quit()

if __name__ == "__main__":
    juego = Juego()
    juego.correr()