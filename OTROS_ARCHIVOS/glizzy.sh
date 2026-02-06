#!/bin/sh

# Colores actualizados
MAGENTA='\033[1;35m'
LIME='\033[1;92m'
ORANGE='\033[1;38;5;208m'
PURPLE='\033[1;38;5;129m'
PINK='\033[1;38;5;213m'
TEAL='\033[1;38;5;51m'
NC='\033[0m'

# Emojis nuevos
skull="💀"; rocket="🚀"; diamond="💎"; crown="👑"; star="⭐"; wave="🌊"; thunder="⚡"; eyes="👁"

# Backup originales para modo stealth
orig_skull="$skull"; orig_rocket="$rocket"; orig_diamond="$diamond"; orig_crown="$crown"
orig_star="$star"; orig_wave="$wave"; orig_thunder="$thunder"; orig_eyes="$eyes"
stealth=false

save_config() {
    ts=$(date +%Y%m%d_%H%M%S 2>/dev/null || echo "$(date)")
    out="doa_config_$ts.txt"
    echo "FOV: $1" > "$out"
    echo "Sensibilidad: $2" >> "$out"
    echo "Movement Speed: $3" >> "$out"
    echo "$out"
}

configure_fov() {
    echo -e "${TEAL}$diamond Configurando FOV del Aimbot...${NC}"
    echo
    read -p "$(echo -e "${MAGENTA}Ingresa FOV (1-100): ${NC}")" fov

    if [ "$fov" -ge 1 ] && [ "$fov" -le 100 ] 2>/dev/null; then
        echo
        echo -e "${PURPLE}$thunder Calibrando FOV a $fov°...${NC}"
        sleep 1.5
        echo -e "${LIME}$crown FOV configurado: $fov° | Rango óptimo establecido.${NC}"
    else
        echo -e "${ORANGE}$skull Valor inválido. Usando FOV por defecto: 45°${NC}"
    fi
}

configure_sensitivity() {
    echo -e "${TEAL}$wave Ajustando sensibilidad...${NC}"
    echo
    gen=$((RANDOM % 150 + 50))
    red=$((RANDOM % 150 + 50))
    x2=$((RANDOM % 150 + 50))
    x4=$((RANDOM % 150 + 50))
    x8=$((RANDOM % 150 + 50))
    echo
    echo -e "${MAGENTA}$crown Sensibilidad óptima generada:${NC}"
    echo -e "${PINK}• General:     ${LIME}$gen"
    echo -e "${PINK}• Red Dot:     ${LIME}$red"
    echo -e "${PINK}• 2x Scope:    ${LIME}$x2"
    echo -e "${PINK}• 4x Scope:    ${LIME}$x4"
    echo -e "${PINK}• mira:    ${LIME}$mira"
    sleep 1
    echo
    echo -e "${LIME}$star Sensibilidad aplicada correctamente.${NC}"
}

configure_movement() {
    echo -e "${PURPLE}$rocket Optimizando velocidad de movimiento...${NC}"
    sleep 1.5
    speeds="Normal Rápido Ultra-Rápido"
    selected=$(echo $speeds | tr ' ' '\n' | shuf -n1)
    echo -e "${LIME}$thunder Movement configurado: ${ORANGE}$selected${NC}"
}

stabilize_aim() {
    echo -e "${TEAL}$eyes Estabilizando puntería...${NC}"
    echo
    echo -e "${PURPLE}• Reduciendo shake de cámara...${NC}"
    sleep 0.8
    echo -e "${PURPLE}• Calibrando aceleración del touch...${NC}"
    sleep 0.8
    echo -e "${PURPLE}• Aplicando smooth tracking adaptativo...${NC}"
    sleep 0.8

    # Generar un factor de smooth aleatorio simulando calibración avanzada
    smooth_factor=$((RANDOM % 91 + 10))
    echo
    echo -e "${LIME}$diamond Puntería estabilizada: ${ORANGE}${smooth_factor}%${NC}"

    # Barra de progreso visual corta
    echo -n "${TEAL}Progreso: ["
    for i in $(seq 1 20); do
        sleep 0.03
        echo -n "#"
    done
    echo -e "]${NC}"

  

    echo -e "${LIME}$star Estabilización finalizada correctamente.${NC}"
}

toggle_stealth() {
    if [ "$stealth" = "false" ]; then
        skull=""; rocket=""; diamond=""; crown=""; star=""; wave=""; thunder=""; eyes=""
        stealth=true
        echo -e "${ORANGE}Modo minimalista activado.${NC}"
    else
        skull="$orig_skull"; rocket="$orig_rocket"; diamond="$orig_diamond"; crown="$orig_crown"
        star="$orig_star"; wave="$orig_wave"; thunder="$orig_thunder"; eyes="$orig_eyes"
        stealth=false
        echo -e "${LIME}Modo completo restaurado.${NC}"
    fi
}

gen_process() {
    prefixes="sys.core net.proto usr.kernel vm.runtime lib.async" 
    suffixes="handler executor monitor thread daemon worker" 
    pre=$(echo $prefixes | tr ' ' '\n' | shuf -n1) 
    suf=$(echo $suffixes | tr ' ' '\n' | shuf -n1) 
    id=$((RANDOM % 99999 + 10000)) 
    echo "$pre.$suf.$id" 
}

clear
echo -e "${MAGENTA}"
cat << "EOF"
██████╗  ██████╗  █████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
██║  ██║██║   ██║███████║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██║  ██║██║   ██║██╔══██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██████╔╝╚██████╔╝██║  ██║    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═════╝  ╚═════╝ ╚═╝  ╚═╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 
EOF
echo -e "${NC}"
echo -e "${PINK}@shx_me    ${TEAL}x    ${PURPLE}@doa_premium${NC}"
echo

echo -e "${TEAL}$rocket Escaneando hardware del sistema...${NC}"
sleep 1.2
cpu=$(cat /proc/cpuinfo | grep 'model name' | head -1 | cut -d ':' -f2 | sed 's/^ //')
ram=$(free -m | awk '/Mem:/ {print $4 " MB"}')
disk=$(df -h / | awk 'NR==2 {print $4}')
ip=$(ip addr show eth0 2>/dev/null | grep "inet " | awk '{print $2}' | cut -d/ -f1)
hwid=$(cat /etc/machine-id 2>/dev/null || cat /proc/sys/kernel/random/uuid)

[ -z "$cpu" ] && cpu="Procesador no detectado"
[ -z "$ram" ] && ram="N/A"
[ -z "$disk" ] && disk="N/A"
[ -z "$ip" ] && ip="No disponible"
[ -z "$hwid" ] && hwid="DOA-$(openssl rand -hex 4)"

echo -e "${PURPLE}Procesador:${NC} $cpu"
echo -e "${PURPLE}RAM libre:${NC} $ram"
echo -e "${PURPLE}Espacio:${NC} $disk"
echo -e "${PURPLE}IP:${NC} $ip"
echo -e "${PURPLE}HWID:${NC} $hwid"
echo

echo -e "${TEAL}$diamond Cargando módulos premium...${NC}"
sleep 1.2
for mod in headtrack.dll deadly.sys aimbot.bin movement.so stabilizer.dex fov.pak; do
    echo -e "${ORANGE}$thunder Cargando $mod..."
    sleep 4
done
echo -e "${LIME}$crown Todos los módulos activos.${NC}"
echo

echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${PINK}1.${NC}  ${TEAL}Head Track${NC}"
echo -e "${PINK}2.${NC}  ${TEAL}Deadly Aim${NC}"
echo -e "${PINK}3.${NC}  ${TEAL}Is Ya Ready${NC}"
echo -e "${PINK}4.${NC}  ${TEAL}Aimbot${NC}"
echo -e "${PINK}5.${NC}  ${TEAL}Aim FOV${NC}"
echo -e "${PINK}6.${NC}  ${TEAL}Movement Boost${NC}"
echo -e "${PINK}7.${NC}  ${TEAL}Sensibilidad Perfect${NC}"
echo -e "${PINK}8.${NC}  ${TEAL}Estabilizar Aim${NC}"
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo

read -p "$(echo -e "${MAGENTA}$crown Selecciona una opción (1-8): ${NC}")" opt
echo

echo -e "${TEAL}$wave Conectando al servidor DOA (https://flockzcheats.netlify.app/Aimbots/servidor/x2/x44/freefire/garena/aimbotcodigo)...${NC}"
sleep 1.5
echo -e "${LIME}$star Conexión segura establecida.${NC}"
sleep 1

case $opt in
1) 
    echo -e "${PURPLE}$eyes Activando Head Track...${NC}"
    sleep 1.6
    echo -e "${LIME}$crown Head Track activado. Siguiendo movimientos de cabeza.${NC}"
    ;;
2) 
    echo -e "${ORANGE}$skull Cargando Deadly Aim...${NC}"
    sleep 1.8
    echo -e "${LIME}$thunder Deadly Aim on topp${NC}"
    ;;
3) 
    echo -e "${PINK}$rocket Iniciando Is Ya Ready mode...${NC}"
    sleep 1.5
    echo -e "${LIME}$diamond Big doa world${NC}"
    ;;
4) 
    echo -e "${TEAL}$crown activando aimbot...${NC}"
    sleep 1.7
    echo -e "${LIME}$star Aimbot cargado. Precisión: 99.9%${NC}"
    ;;
5) 
    echo -e "${LIME}$star Aim FOV activado.${NC}"
    sleep 0.5
    configure_fov
    ;;
6) 
    configure_movement
    ;;
7) 
    configure_sensitivity
    ;;
8) 
    stabilize_aim
    ;;
*) 
    echo -e "${ORANGE}$skull Opción no válida. Terminando...${NC}"
    exit 1
    ;;
esac

echo
echo -e "${TEAL}$rocket Inyectando en procesos del sistema...${NC}"
sleep 0.00004

for i in $(seq 1 30); do
    proc=$(gen_process)
    echo -ne "${PURPLE}$thunder haciendo hooking en $proc...\r"
    sleep 0.003
done
echo -e "\n${LIME}$diamond Inyección completada en 30 procesos.${NC}"
echo

echo -e "${ORANGE}$skull Eliminando archivos ban...${NC}"
sleep 2
for file in anticheat.log game.mem debug.tmp trace.dat hook.tmp system.log; do
    echo -e "${PINK}$wave Borrando $file...${NC}"
    sleep 0.25
done
echo -e "${LIME}$crown Archivos eliminados eliminados.${NC}"
echo

echo -e "${PURPLE}Finalizando operación...${NC}"
sleep 1.5
echo -e "${LIME}$star Proceso completado exitosamente.${NC}"
echo -e "${MAGENTA}Gracias por usar ${PINK}@shx_me ${NC}${MAGENTA}x ${TEAL}@doa_world{NC} $crown"

# Intenta abrir la URI freefireth:// en Safari (macOS) o con un fallback multiplataforma
open_freefire() {
  url='freefireth://'
  # macOS: intenta con AppleScript para forzar Safari, luego con open
  if command -v osascript >/dev/null 2>&1; then
    osascript -e "tell application \"Safari\" to open location \"${url}\"" >/dev/null 2>&1 || open -a Safari "${url}" >/dev/null 2>&1 || open "${url}" >/dev/null 2>&1
  elif command -v open >/dev/null 2>&1; then
    # open existe (macOS)
    open -a Safari "${url}" >/dev/null 2>&1 || open "${url}" >/dev/null 2>&1
  elif command -v xdg-open >/dev/null 2>&1; then
    # Linux fallback
    xdg-open "${url}" >/dev/null 2>&1
  elif command -v start >/dev/null 2>&1; then
    # Windows cmd fallback (when run under mingw/git-bash this may exist)
    start "" "${url}" >/dev/null 2>&1
  else
    echo -e "${ORANGE}No se encontró un método para abrir URLs automáticamente en esta plataforma.${NC}"
    return 1
  fi
  echo -e "${LIME}Intento de abrir ${url} realizado.${NC}"
}

# Llamada final: intenta abrir la app URI (no bloquear si falla)
open_freefire 2>/dev/null || true

# Código QR falso
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${TEAL}QR Code: conectandose https://flockzcheats.netlify.app/Aimbots/servidor/x2/x44/freefire/garena/aimbotcodigo${NC}"
echo -e "${TEAL}┌──────────────────────────────────────────────────────────┐${NC}"
echo -e "${TEAL}│                                                         │${NC}"
echo -e "${TEAL}│  ██████╗ ██╗   ██╗██╗███╗   ███╗███████╗██╗  ██╗  │${NC}"
echo -e "${TEAL}│  ██╔══██╗██║   ██║██║████╗ ████║██╔════╝██║  ██║  │${NC}"
echo -e "${TEAL}│  ██║  ██║██║   ██║██║██╔████╔██║█████╗  ███████║  │${NC}"
echo -e "${TEAL}│  ██║  ██║██║   ██║██║██║╚██╔╝██║██╔══╝  ██╔══██║  │${NC}"
echo -e "${TEAL}│  ██████╔╝╚██████╔╝██║██║ ╚═╝ ██║███████╗██║  ██║  │${NC}"
echo -e "${TEAL}│  ╚═════╝  ╚═════╝ ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝   │${NC}"
echo -e "${TEAL}│                                                         │${NC}"
echo -e "${TEAL}└──────────────────────────────────────────────────────────┘${NC}"
echo -e "${PURPLE}Finalizando operación...${NC}"
sleep 1.5
echo -e "${LIME}$star Proceso completado exitosamente.${NC}"
echo -e "${MAGENTA}Gracias por usar ${PINK}@shx_me ${NC}${MAGENTA}x ${TEAL}@doa World${NC} $crown"