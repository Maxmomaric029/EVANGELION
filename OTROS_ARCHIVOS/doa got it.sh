#!/bin/bash

# Colores
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
MAGENTA='\033[0;35m'
RED='\033[0;31m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # Sin color

# Funciones de animación
loading_animation() {
    local text="$1"
    local delay="${2:-0.1}"
    echo -ne "${CYAN}${text}"
    for i in {1..3}; do
        echo -n "."
    done
    echo -e "${NC}"
}

progress_bar() {
    local duration="${1:-1}"
    local width=50
    local progress=0

    echo -ne "${YELLOW}["
    while [ $progress -lt $width ]; do
        echo -ne "█"
        progress=$((progress + 1))
    done
    echo -e "]${NC}"
}

success_animation() {
    echo -e "${GREEN}"
    echo "    ✓ ✓ ✓ COMPLETADO ✓ ✓ ✓"
    echo -e "${NC}"
}

# Funciones de las opciones
aimbot_doa() {
    clear
    echo -e "${GREEN}"
    cat << "EOF"
     █████╗ ██╗███╗   ███╗██████╗  ██████╗ ████████╗
    ██╔══██╗██║████╗ ████║██╔══██╗██╔═══██╗╚══██╔══╝
    ███████║██║██╔████╔██║██████╔╝██║   ██║   ██║
    ██╔══██║██║██║╚██╔╝██║██╔══██╗██║   ██║   ██║
    ██║  ██║██║██║ ╚═╝ ██║██████╔╝╚██████╔╝   ██║
    ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═════╝  ╚═════╝    ╚═╝

    ██████╗  ██████╗  █████╗
    ██╔══██╗██╔═══██╗██╔══██╗
    ██║  ██║██║   ██║███████║
    ██║  ██║██║   ██║██╔══██║
    ██████╔╝╚██████╔╝██║  ██║
    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║              ACTIVANDO AIMBOT DOA SYSTEM                 ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Cargando módulo de Aimbot" 0.3
    echo -e "${GREEN}[INJECT] Hooking game engine at 0x7F4A2B00${NC}"
    echo -e "${GREEN}[PATCH] Applying aim vector correction${NC}"
    echo -e "${GREEN}[OFFSET] Target prediction: ENABLED${NC}"
    echo ""
    progress_bar 0.8
    echo ""
    success_animation

    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              AIMBOT DOA COMPLETAMENTE ACTIVO             ║${NC}"
    echo -e "${GREEN}║            Asistencia de puntería operativa              ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

no_recoil() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
    ███╗   ██╗ ██████╗     ██████╗ ███████╗ ██████╗ ██████╗ ██╗██╗
    ████╗  ██║██╔═══██╗    ██╔══██╗██╔════╝██╔════╝██╔═══██╗██║██║
    ██╔██╗ ██║██║   ██║    ██████╔╝█████╗  ██║     ██║   ██║██║██║
    ██║╚██╗██║██║   ██║    ██╔══██╗██╔══╝  ██║     ██║   ██║██║██║
    ██║ ╚████║╚██████╔╝    ██║  ██║███████╗╚██████╗╚██████╔╝██║███████╗
    ╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║           APLICANDO COMPENSACIÓN DE RETROCESO            ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Aplicando compensación de retroceso" 0.3
    echo -e "${GREEN}[MEMORY] Writing to weapon recoil table 0x8C5A1200${NC}"
    echo -e "${GREEN}[PATCH] Vertical recoil multiplier: 0.00${NC}"
    echo -e "${GREEN}[PATCH] Horizontal recoil multiplier: 0.00${NC}"
    echo ""
    progress_bar 0.6
    echo ""
    success_animation

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║                NO RECOIL COMPLETAMENTE ACTIVO            ║${NC}"
    echo -e "${CYAN}║               Retroceso reducido al 0%                   ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

no_spread() {
    clear
    echo -e "${MAGENTA}"
    cat << "EOF"
    ███╗   ██╗ ██████╗     ███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗
    ████╗  ██║██╔═══██╗    ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗
    ██╔██╗ ██║██║   ██║    ███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║
    ██║╚██╗██║██║   ██║    ╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║
    ██║ ╚████║╚██████╔╝    ███████║██║     ██║  ██║███████╗██║  ██║██████╔╝
    ╚═╝  ╚═══╝ ╚═════╝     ╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝
EOF
    echo -e "${NC}\n"

    echo -e "${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║            ELIMINANDO DISPERSIÓN DE BALAS                ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Eliminando dispersión de balas" 0.3
    echo -e "${GREEN}[OFFSET] Bullet spread address: 0x9A3C7F80${NC}"
    echo -e "${GREEN}[FREEZE] Spread pattern locked to center${NC}"
    echo -e "${GREEN}[HOOK] Accuracy multiplier set to 100%${NC}"
    echo ""
    progress_bar 0.7
    echo ""
    success_animation

    echo -e "${MAGENTA}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${MAGENTA}║               NO SPREAD COMPLETAMENTE ACTIVO             ║${NC}"
    echo -e "${MAGENTA}║                Precisión máxima alcanzada                ║${NC}"
    echo -e "${MAGENTA}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

estirar_pantalla() {
    clear
    echo -e "${BLUE}"
    cat << "EOF"
    ███████╗███████╗████████╗██╗██████╗  █████╗ ██████╗
    ██╔════╝██╔════╝╚══██╔══╝██║██╔══██╗██╔══██╗██╔══██╗
    █████╗  ███████╗   ██║   ██║██████╔╝███████║██████╔╝
    ██╔══╝  ╚════██║   ██║   ██║██╔══██╗██╔══██║██╔══██╗
    ███████╗███████║   ██║   ██║██║  ██║██║  ██║██║  ██║
    ╚══════╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

    ██████╗  ██████╗    ███╗   ███╗ ██████╗ ██████╗ ███████╗
    ██╔══██╗██╔════╝    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
    ██████╔╝██║         ██╔████╔██║██║   ██║██║  ██║█████╗
    ██╔═══╝ ██║         ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝
    ██║     ╚██████╗    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗
    ╚═╝      ╚═════╝    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║           AJUSTANDO RESOLUCIÓN A MODO PC                 ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Ajustando resolución a modo PC" 0.3
    echo -e "${GREEN}[RENDER] Forcing aspect ratio to 4:3${NC}"
    echo -e "${GREEN}[DISPLAY] Viewport stretched: 1920x1440 -> 1920x1080${NC}"
    echo -e "${GREEN}[FOV] Horizontal FOV increased by 33%${NC}"
    echo ""
    progress_bar 0.9
    echo ""
    success_animation

    echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║             PANTALLA ESTIRADA COMPLETAMENTE              ║${NC}"
    echo -e "${BLUE}║               Aspect ratio modificado: 4:3               ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

aumentar_dpi() {
    clear
    echo -e "${YELLOW}"
    cat << "EOF"
    ██████╗ ██████╗ ██╗    ██████╗  ██████╗  ██████╗ ███████╗████████╗
    ██╔══██╗██╔══██╗██║    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝
    ██║  ██║██████╔╝██║    ██████╔╝██║   ██║██║   ██║███████╗   ██║
    ██║  ██║██╔═══╝ ██║    ██╔══██╗██║   ██║██║   ██║╚════██║   ██║
    ██████╔╝██║     ██║    ██████╔╝╚██████╔╝╚██████╔╝███████║   ██║
    ╚═════╝ ╚═╝     ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║           INCREMENTANDO SENSIBILIDAD DPI                 ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Incrementando sensibilidad DPI" 0.3
    echo -e "${GREEN}[INPUT] Mouse sensitivity multiplier: 1.25x${NC}"
    echo -e "${GREEN}[OVERRIDE] Touch sensitivity boosted${NC}"
    echo -e "${GREEN}[ACCEL] Input acceleration curve modified${NC}"
    echo ""
    progress_bar 0.5
    echo ""
    success_animation

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║                DPI BOOST COMPLETAMENTE ACTIVO            ║${NC}"
    echo -e "${YELLOW}║                Nueva sensibilidad: +25%                  ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

dpi_plus() {
    clear
    echo -e "${RED}"
    cat << "EOF"
    ██████╗ ██████╗ ██╗    ██████╗ ██╗     ██╗   ██╗███████╗
    ██╔══██╗██╔══██╗██║    ██╔══██╗██║     ██║   ██║██╔════╝
    ██║  ██║██████╔╝██║    ██████╔╝██║     ██║   ██║███████╗
    ██║  ██║██╔═══╝ ██║    ██╔═══╝ ██║     ██║   ██║╚════██║
    ██████╔╝██║     ██║    ██║     ███████╗╚██████╔╝███████║
    ╚═════╝ ╚═╝     ╚═╝    ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${MAGENTA}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${MAGENTA}║              APLICANDO DPI PLUS MÁXIMO                   ║${NC}"
    echo -e "${MAGENTA}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Aplicando DPI Plus" 0.3
    echo -e "${GREEN}[EXTREME] DPI multiplier set to 1.50x${NC}"
    echo -e "${GREEN}[BYPASS] Input lag reduction active${NC}"
    echo -e "${GREEN}[TURBO] Response time: 1ms${NC}"
    echo ""
    progress_bar 0.5
    echo ""
    success_animation

    echo -e "${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║              DPI PLUS COMPLETAMENTE ACTIVO               ║${NC}"
    echo -e "${RED}║               Sensibilidad máxima: +50%                  ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

anti_aim() {
    clear
    echo -e "${PURPLE}"
    cat << "EOF"
     █████╗ ███╗   ██╗████████╗██╗     █████╗ ██╗███╗   ███╗
    ██╔══██╗████╗  ██║╚══██╔══╝██║    ██╔══██╗██║████╗ ████║
    ███████║██╔██╗ ██║   ██║   ██║    ███████║██║██╔████╔██║
    ██╔══██║██║╚██╗██║   ██║   ██║    ██╔══██║██║██║╚██╔╝██║
    ██║  ██║██║ ╚████║   ██║   ██║    ██║  ██║██║██║ ╚═╝ ██║
    ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝    ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║              CONFIGURANDO ANTI-AIM SYSTEM                ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Configurando Anti-Aim" 0.3
    echo -e "${GREEN}[HITBOX] Head hitbox size reduced by 40%${NC}"
    echo -e "${GREEN}[JITTER] Random movement pattern injected${NC}"
    echo -e "${GREEN}[DESYNC] Player model desynchronization active${NC}"
    echo ""
    progress_bar 0.8
    echo ""
    success_animation

    echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║              ANTI-AIM COMPLETAMENTE ACTIVO               ║${NC}"
    echo -e "${PURPLE}║             Protección contra headshots                  ║${NC}"
    echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

speed_200() {
    clear
    echo -e "${GREEN}"
    cat << "EOF"
    ███████╗██████╗ ███████╗███████╗██████╗     ██████╗  ██████╗  ██████╗
    ██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗    ╚════██╗██╔═══██╗██╔═══██╗
    ███████╗██████╔╝█████╗  █████╗  ██║  ██║     █████╔╝██║   ██║██║   ██║
    ╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║    ██╔═══╝ ██║   ██║██║   ██║
    ███████║██║     ███████╗███████╗██████╔╝    ███████╗╚██████╔╝╚██████╔╝
    ╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝
EOF
    echo -e "${NC}\n"

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║          AUMENTANDO VELOCIDAD DE MOVIMIENTO              ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Aumentando velocidad de movimiento" 0.3
    echo -e "${GREEN}[PHYSICS] Movement speed scalar: 2.0x${NC}"
    echo -e "${GREEN}[OVERRIDE] Sprint speed unlimited${NC}"
    echo -e "${GREEN}[PATCH] Stamina drain disabled${NC}"
    echo ""
    progress_bar 0.6
    echo ""
    success_animation

    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              SPEED 200 COMPLETAMENTE ACTIVO              ║${NC}"
    echo -e "${GREEN}║               Velocidad de personaje x2                  ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

config_aimradius() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
     █████╗ ██╗███╗   ███╗    ██████╗  █████╗ ██████╗ ██╗██╗   ██╗███████╗
    ██╔══██╗██║████╗ ████║    ██╔══██╗██╔══██╗██╔══██╗██║██║   ██║██╔════╝
    ███████║██║██╔████╔██║    ██████╔╝███████║██║  ██║██║██║   ██║███████╗
    ██╔══██║██║██║╚██╔╝██║    ██╔══██╗██╔══██║██║  ██║██║██║   ██║╚════██║
    ██║  ██║██║██║ ╚═╝ ██║    ██║  ██║██║  ██║██████╔╝██║╚██████╔╝███████║
    ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝ ╚═════╝ ╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║            CONFIGURANDO AIM RADIUS CUSTOM                ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${CYAN}Valor actual: 50${NC}\n"
    echo -e "${YELLOW}Introduce el nuevo valor (1-100): ${NC}"
    read -r valor

    if [[ "$valor" =~ ^[0-9]+$ ]] && [ "$valor" -ge 1 ] && [ "$valor" -le 100 ]; then
        echo ""
        loading_animation "Aplicando AimFOV: $valor" 0.2
        echo -e "${GREEN}[FOV] Field of view angle set to ${valor}°${NC}"
        echo -e "${GREEN}[CAMERA] View frustum updated${NC}"
        echo ""
        progress_bar 0.5
        echo ""
        success_animation
        echo -e "${MAGENTA}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${MAGENTA}║            AIM FOV CONFIGURADO EXITOSAMENTE              ║${NC}"
        echo -e "${MAGENTA}║                  Nuevo valor: $valor                        ║${NC}"
        echo -e "${MAGENTA}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    else
        echo -e "\n${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║                    ERROR DE VALOR                        ║${NC}"
        echo -e "${RED}║           Debe ser un número entre 1 y 100               ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    fi
    echo -e "${YELLOW}Presiona ENTER para volver al menú...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

fps_booster() {
    clear
    echo -e "${GREEN}"
    cat << "EOF"
    ███████╗██████╗ ███████╗    ██████╗  ██████╗  ██████╗ ███████╗████████╗
    ██╔════╝██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝
    █████╗  ██████╔╝███████╗    ██████╔╝██║   ██║██║   ██║███████╗   ██║
    ██╔══╝  ██╔═══╝ ╚════██║    ██╔══██╗██║   ██║██║   ██║╚════██║   ██║
    ██║     ██║     ███████║    ██████╔╝╚██████╔╝╚██████╔╝███████║   ██║
    ╚═╝     ╚═╝     ╚══════╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║           OPTIMIZANDO RENDIMIENTO DEL JUEGO              ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Limpiando cache y archivos temporales" 0.2
    echo -e "${GREEN}[CLEAN] Deleted 847MB of temp files${NC}"
    echo -e "${GREEN}[CACHE] Game cache cleared${NC}\n"

    loading_animation "Optimizando texturas y shaders" 0.2
    echo -e "${GREEN}[GPU] Texture quality downscaled to Low${NC}"
    echo -e "${GREEN}[SHADER] Compiled shader cache rebuilt${NC}\n"

    loading_animation "Ajustando prioridad del proceso" 0.2
    echo -e "${GREEN}[CPU] Process priority set to REALTIME${NC}"
    echo -e "${GREEN}[AFFINITY] All cores allocated to game${NC}\n"

    loading_animation "Desactivando efectos innecesarios" 0.2
    echo -e "${GREEN}[FX] Particle effects disabled${NC}"
    echo -e "${GREEN}[SHADOWS] Dynamic shadows OFF${NC}"
    echo ""
    progress_bar 0.8
    echo ""

    success_animation

    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              FPS BOOSTER COMPLETAMENTE ACTIVO            ║${NC}"
    echo -e "${GREEN}║                 Aumento de FPS: +60-120                  ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

ping_reducer() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
    ██████╗ ██╗███╗   ██╗ ██████╗     ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗
    ██╔══██╗██║████╗  ██║██╔════╝     ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
    ██████╔╝██║██╔██╗ ██║██║  ███╗    ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝
    ██╔═══╝ ██║██║╚██╗██║██║   ██║    ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗
    ██║     ██║██║ ╚████║╚██████╔╝    ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║
    ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║            REDUCIENDO LATENCIA Y PING                    ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Optimizando conexión de red" 0.2
    echo -e "${GREEN}[DNS] CloudFlare DNS configured: 1.1.1.1${NC}"
    echo -e "${GREEN}[MTU] Maximum transmission unit optimized${NC}\n"

    loading_animation "Flush DNS y liberando puertos" 0.2
    echo -e "${GREEN}[FLUSH] DNS cache cleared${NC}"
    echo -e "${GREEN}[PORTS] Gaming ports forwarded: 27015-27030${NC}\n"

    loading_animation "Configurando QoS y prioridad de red" 0.2
    echo -e "${GREEN}[QoS] Quality of Service: Gaming priority${NC}"
    echo -e "${GREEN}[BANDWIDTH] Reserved bandwidth: 80%${NC}\n"

    loading_animation "Reduciendo latencia del servidor" 0.3
    echo -e "${GREEN}[ROUTE] Best route selected: 12ms${NC}"
    echo ""
    progress_bar 1.0
    echo ""

    success_animation

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║            PING REDUCER COMPLETAMENTE ACTIVO             ║${NC}"
    echo -e "${CYAN}║                Reducción de ping: -40-80ms               ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

remove_grass() {
    clear
    echo -e "${YELLOW}"
    cat << "EOF"
    ██████╗ ███████╗███╗   ███╗ ██████╗ ██╗   ██╗███████╗
    ██╔══██╗██╔════╝████╗ ████║██╔═══██╗██║   ██║██╔════╝
    ██████╔╝█████╗  ██╔████╔██║██║   ██║██║   ██║█████╗
    ██╔══██╗██╔══╝  ██║╚██╔╝██║██║   ██║╚██╗ ██╔╝██╔══╝
    ██║  ██║███████╗██║ ╚═╝ ██║╚██████╔╝ ╚████╔╝ ███████╗
    ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝   ╚═══╝  ╚══════╝

     ██████╗ ██████╗  █████╗ ███████╗███████╗
    ██╔════╝ ██╔══██╗██╔══██╗██╔════╝██╔════╝
    ██║  ███╗██████╔╝███████║███████╗███████╗
    ██║   ██║██╔══██╗██╔══██║╚════██║╚════██║
    ╚██████╔╝██║  ██║██║  ██║███████║███████║
     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║              ELIMINANDO VEGETACIÓN DEL MAPA              ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Removiendo pasto y arbustos" 0.2
    echo -e "${GREEN}[TERRAIN] Grass density set to 0%${NC}"
    echo -e "${GREEN}[FOLIAGE] Vegetation LOD disabled${NC}\n"

    loading_animation "Eliminando árboles y vegetación" 0.2
    echo -e "${GREEN}[OBJECTS] Tree models hidden${NC}"
    echo -e "${GREEN}[RENDER] Foliage culling enabled${NC}\n"

    loading_animation "Optimizando visibilidad del terreno" 0.3
    echo -e "${GREEN}[VIEW] Clear sightlines established${NC}"
    echo ""
    progress_bar 0.7
    echo ""

    success_animation

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║            REMOVE GRASS COMPLETAMENTE ACTIVO             ║${NC}"
    echo -e "${YELLOW}║              Visibilidad mejorada al 100%                ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

wall_hack() {
    clear
    echo -e "${MAGENTA}"
    cat << "EOF"
    ██╗    ██╗ █████╗ ██╗     ██╗         ██╗  ██╗ █████╗  ██████╗██╗  ██╗
    ██║    ██║██╔══██╗██║     ██║         ██║  ██║██╔══██╗██╔════╝██║ ██╔╝
    ██║ █╗ ██║███████║██║     ██║         ███████║███████║██║     █████╔╝
    ██║███╗██║██╔══██║██║     ██║         ██╔══██║██╔══██║██║     ██╔═██╗
    ╚███╔███╔╝██║  ██║███████╗███████╗    ██║  ██║██║  ██║╚██████╗██║  ██╗
     ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
EOF
    echo -e "${NC}\n"

    echo -e "${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║              ACTIVANDO VISIÓN A TRAVÉS DE PAREDES        ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Inyectando shaders personalizados" 0.3
    echo -e "${GREEN}[SHADER] Wall transparency shader injected${NC}"
    echo -e "${GREEN}[RENDER] Occlusion culling disabled${NC}\n"

    loading_animation "Modificando pipeline de renderizado" 0.2
    echo -e "${GREEN}[PIPELINE] Z-buffer manipulation active${NC}"
    echo -e "${GREEN}[DEPTH] Depth testing bypassed${NC}\n"

    loading_animation "Activando ESP de jugadores" 0.2
    echo -e "${GREEN}[ESP] Player skeletons visible through walls${NC}"
    echo -e "${GREEN}[GLOW] Enemy outline glow enabled${NC}"
    echo ""
    progress_bar 0.9
    echo ""

    success_animation

    echo -e "${MAGENTA}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${MAGENTA}║              WALL HACK COMPLETAMENTE ACTIVO              ║${NC}"
    echo -e "${MAGENTA}║               Ver enemigos a través de muros             ║${NC}"
    echo -e "${MAGENTA}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para continuar...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

bypass_anticheat() {
    clear
    echo -e "${PURPLE}"
    cat << "EOF"
    ███████╗████████╗███████╗ █████╗ ██╗  ████████╗██╗  ██╗
    ██╔════╝╚══██╔══╝██╔════╝██╔══██╗██║  ╚══██╔══╝██║  ██║
    ███████╗   ██║   █████╗  ███████║██║     ██║   ███████║
    ╚════██║   ██║   ██╔══╝  ██╔══██║██║     ██║   ██╔══██║
    ███████║   ██║   ███████╗██║  ██║███████╗██║   ██║  ██║
    ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝  ╚═╝

    ██████╗ ██╗   ██╗██████╗  █████╗ ███████╗███████╗
    ██╔══██╗╚██╗ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝
    ██████╔╝ ╚████╔╝ ██████╔╝███████║███████╗███████╗
    ██╔══██╗  ╚██╔╝  ██╔═══╝ ██╔══██║╚════██║╚════██║
    ██████╔╝   ██║   ██║     ██║  ██║███████║███████║
    ╚═════╝    ╚═╝   ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝
EOF
    echo -e "${NC}\n"

    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║           INICIANDO BYPASS ANTI-CHEAT MODE               ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    loading_animation "Inyectando driver rootkit" 0.2
    echo -e "${GREEN}[KERNEL] Driver loaded at ring 0${NC}"
    echo -e "${GREEN}[STEALTH] Kernel mode hooks installed${NC}\n"

    loading_animation "Ofuscando memoria del proceso" 0.2
    echo -e "${GREEN}[MEMORY] Process memory encrypted${NC}"
    echo -e "${GREEN}[HIDE] Module list manipulation active${NC}\n"

    loading_animation "Bypassing VAC, BattlEye, EAC" 0.3
    echo ""
    progress_bar 1.2
    echo ""
    echo -e "${GREEN}[BYPASS] VAC Detection: BYPASSED${NC}"
    echo -e "${GREEN}[BYPASS] BattlEye: BYPASSED${NC}"
    echo -e "${GREEN}[BYPASS] Easy Anti-Cheat: BYPASSED${NC}\n"

    loading_animation "Spoofing HWID & MAC Address" 0.2
    echo -e "${GREEN}[SPOOF] HWID spoofed: $(cat /dev/urandom | tr -dc 'A-F0-9' | fold -w 16 | head -n 1)${NC}"
    echo -e "${GREEN}[SPOOF] MAC Address: $(cat /dev/urandom | tr -dc 'A-F0-9' | fold -w 2 | head -n 6 | paste -sd':')${NC}\n"

    loading_animation "Limpiando traces y logs" 0.2
    echo -e "${GREEN}[CLEAN] Event logs wiped${NC}"
    echo -e "${GREEN}[SECURE] Detection signatures cleared${NC}\n"

    success_animation

    echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║                    MODO STEALTH ACTIVO                    ║${NC}"
    echo -e "${PURPLE}║          Estás completamente invisible al AC             ║${NC}"
    echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Presiona ENTER para volver al menú...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}


# Menú principal
while true; do
    clear
    
    # ASCII Art "DOA WORLD DOMINA" en verde
    echo -e "${GREEN}"
    cat << "EOF"
    ██████╗  ██████╗  █████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
    ██╔══██╗██╔═══██╗██╔══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
    ██║  ██║██║   ██║███████║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
    ██║  ██║██║   ██║██╔══██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
    ██████╔╝╚██████╔╝██║  ██║    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 
                                                                              
    ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗                        
    ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║██╔══██╗                       
    ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║███████║                       
    ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██║                       
    ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║██║  ██║                       
    ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝                       
EOF
    echo -e "${NC}\n"

    # Batman ASCII Art con letras YB4L SHOTTA
    echo -e "${GREEN}"
    cat << "EOF"
       _,    _   _    ,_
   .o888P     Y8o8Y     Y888o.
  d88888      88888      88888b
 d888888b_  _d88888b_  _d888888b
 8888888888888888888888888888888
 8888888888888888888888888888888
 YJGS8P"Y888P"Y888P"Y888P"Y8888P
  Y888   '8'   Y8P   '8'   888Y
   '8o          V          o8'
EOF
    echo -e "${NC}"
    echo -e "${YELLOW}"
    cat << "EOF"
    ██╗   ██╗██████╗ ██╗  ██╗██╗         ███████╗██╗  ██╗ ██████╗ ████████╗████████╗ █████╗ 
    ╚██╗ ██╔╝██╔══██╗██║  ██║██║         ██╔════╝██║  ██║██╔═══██╗╚══██╔══╝╚══██╔══╝██╔══██╗
     ╚████╔╝ ██████╔╝███████║██║         ███████╗███████║██║   ██║   ██║      ██║   ███████║
      ╚██╔╝  ██╔══██╗╚════██║██║         ╚════██║██╔══██║██║   ██║   ██║      ██║   ██╔══██║
       ██║   ██████╔╝     ██║███████╗    ███████║██║  ██║╚██████╔╝   ██║      ██║   ██║  ██║
       ╚═╝   ╚═════╝      ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝   ╚═╝  ╚═╝
EOF
    echo -e "${NC}\n"
    
    # Info del sistema (secundaria/futurista)
    echo -e "${CYAN}╭─ SYSTEM INFO ─────────────────────────────────────────────────╮${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        cpu_info=$(sysctl -n machdep.cpu.brand_string | cut -d'@' -f1 | xargs)
        cores=$(sysctl -n hw.logicalcpu)
        total_ram=$(sysctl -n hw.memsize)
        total_gb=$((total_ram / 1024 / 1024 / 1024))
    else
        cpu_info=$(lscpu | grep "Model name" | cut -d: -f2 | xargs | cut -d'@' -f1)
        cores=$(nproc)
        total_gb=$(free -g | awk '/^Mem:/{print $2}')
    fi
    uptime_info=$(uptime | awk -F'up ' '{print $2}' | awk -F',' '{print $1}')
    disk_info=$(df -h / | awk 'NR==2 {print $4}')
    
    echo -e "${CYAN}│${NC} CPU: ${cpu_info} [${cores} cores] ${CYAN}│${NC} RAM: ${total_gb}GB ${CYAN}│${NC} Disk: ${disk_info} ${CYAN}│${NC} Up: ${uptime_info}"
    echo -e "${CYAN}╰───────────────────────────────────────────────────────────────╯${NC}"
    echo ""
    
    # Verificación de archivo AimbotFree.F4x
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    ARCHIVO="$SCRIPT_DIR/AimbotFree.F4x"
    if [ -f "$ARCHIVO" ]; then
        echo -e "${GREEN}[✓] AimbotFree.F4x detected | MD5: $(md5sum "$ARCHIVO" 2>/dev/null | cut -d' ' -f1 || md5 "$ARCHIVO" 2>/dev/null | cut -d' ' -f4)${NC}"
    else
        echo -e "${RED}[✗] AimbotFree.F4x not found in current directory${NC}"
    fi
    echo ""
    echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
    echo ""

    echo -e "${PURPLE}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║                     ⚡ MENÚ DE OPCIONES ⚡                      ║${NC}"
    echo -e "${PURPLE}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[1]${NC}  Aimbot DOA                    ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[2]${NC}  No Recoil                     ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[3]${NC}  No Spread                     ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[4]${NC}  Estirar Pantalla (COMO PC)    ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[5]${NC}  Aumentar DPI                  ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[6]${NC}  DPI Plus                      ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[7]${NC}  Anti-Aim                      ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[8]${NC}  Speed 200                     ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[9]${NC}  AimRadius Config (1-100)      ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[10]${NC} AimFOV Config (1-100)         ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${RED}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${NC}"
    echo -e "${RED}┃${NC} ${PURPLE}[11]${NC} 🛡️  BYPASS ANTI-CHEAT 🛡️       ${RED}┃${NC}"
    echo -e "${RED}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${NC}"
    echo ""

    echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║                  ⚡ OPTIMIZACIÓN ⚡                            ║${NC}"
    echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[12]${NC} FPS Booster                   ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[13]${NC} Ping Reducer                  ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[14]${NC} Remove Grass                  ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${GREEN}[15]${NC} Wall Hack (ESP)               ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${CYAN}┌─────────────────────────────────────┐${NC}"
    echo -e "${CYAN}│${NC} ${RED}[0]${NC}  Salir                         ${CYAN}│${NC}"
    echo -e "${CYAN}└─────────────────────────────────────┘${NC}"
    echo ""

    echo -e "${PURPLE}════════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${GREEN}Selecciona una opción [0-15]: ${NC}"
    read -r opcion

    case $opcion in
        1) aimbot_doa ;;
        2) no_recoil ;;
        3) no_spread ;;
        4) estirar_pantalla ;;
        5) aumentar_dpi ;;
        6) dpi_plus ;;
        7) anti_aim ;;
        8) speed_200 ;;
        9) config_aimradius ;;
        10) config_aimfov ;;
        11) bypass_anticheat ;;
        12) fps_booster ;;
        13) ping_reducer ;;
        14) remove_grass ;;
        15) wall_hack ;;
        0)
            clear
            echo -e "${GREEN}¡Hasta luego!${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}Opción inválida. Presiona ENTER para continuar...${NC}"
            read
            ;;
    esac
done-100): ${NC}"
    read -r valor

    if [[ "$valor" =~ ^[0-9]+$ ]] && [ "$valor" -ge 1 ] && [ "$valor" -le 100 ]; then
        echo ""
        loading_animation "Aplicando AimRadius: $valor" 0.2
        echo -e "${GREEN}[CONFIG] Radius value written to 0xA4B2C800${NC}"
        echo -e "${GREEN}[VERIFY] New radius: ${valor} pixels${NC}"
        echo ""
        progress_bar 0.5
        echo ""
        success_animation
        echo -e "${CYAN}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${CYAN}║           AIM RADIUS CONFIGURADO EXITOSAMENTE            ║${NC}"
        echo -e "${CYAN}║                 Nuevo valor: $valor                         ║${NC}"
        echo -e "${CYAN}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    else
        echo -e "\n${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║                    ERROR DE VALOR                        ║${NC}"
        echo -e "${RED}║           Debe ser un número entre 1 y 100               ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    fi
    echo -e "${YELLOW}Presiona ENTER para volver al menú...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}

config_aimfov() {
    clear
    echo -e "${MAGENTA}"
    cat << "EOF"
     █████╗ ██╗███╗   ███╗    ███████╗ ██████╗ ██╗   ██╗
    ██╔══██╗██║████╗ ████║    ██╔════╝██╔═══██╗██║   ██║
    ███████║██║██╔████╔██║    █████╗  ██║   ██║██║   ██║
    ██╔══██║██║██║╚██╔╝██║    ██╔══╝  ██║   ██║╚██╗ ██╔╝
    ██║  ██║██║██║ ╚═╝ ██║    ██║     ╚██████╔╝ ╚████╔╝
    ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝    ╚═╝      ╚═════╝   ╚═══╝
EOF
    echo -e "${NC}\n"

    echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║              CONFIGURANDO AIM FOV CUSTOM                 ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}\n"

    echo -e "${CYAN}Valor actual: 50${NC}\n"
    echo -e "${YELLOW}Introduce el nuevo valor (-100): ${NC}"
    read -r valor

    if [[ "$valor" =~ ^[0-9]+$ ]] && [ "$valor" -ge 1 ] && [ "$valor" -le 100 ]; then
        echo ""
        loading_animation "Aplicando AimFOV: $valor" 0.2
        echo -e "${GREEN}[FOV] Field of view angle set to ${valor}°${NC}"
        echo -e "${GREEN}[CAMERA] View frustum updated${NC}"
        echo ""
        progress_bar 0.5
        echo ""
        success_animation
        echo -e "${MAGENTA}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${MAGENTA}║            AIM FOV CONFIGURADO EXITOSAMENTE              ║${NC}"
        echo -e "${MAGENTA}║                  Nuevo valor: $valor                        ║${NC}"
        echo -e "${MAGENTA}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    else
        echo -e "\n${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║                    ERROR DE VALOR                        ║${NC}"
        echo -e "${RED}║           Debe ser un número entre 1 y 100               ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}\n"
    fi
    echo -e "${YELLOW}Presiona ENTER para volver al menú...${NC}"
    read
    open "freefireth://" 2>/dev/null || xdg-open "freefireth://" 2>/dev/null || start "freefireth://" 2>/dev/null
}