import subprocess
import os
import sys

def run_command(command):
    """Ejecuta un comando de consola y muestra el resultado."""
    print(f"[*] Ejecutando: {command}")
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"[!] Error:\n{result.stderr}")
        return False
    if result.stdout:
        print(result.stdout)
    return True

def main():
    repo_url = "https://github.com/Maxmomaric029/EVANGELION"
    commit_msg = "Update Evangelion Panel - Monitoring & UI Improvements"
    
    # Asegurarse de estar en el directorio correcto
    if not os.path.exists(".git"):
        print("[*] Inicializando repositorio Git...")
        if not run_command("git init"):
            return

    # Configurar el remoto
    print("[*] Configurando URL remota...")
    run_command(f"git remote add origin {repo_url} 2>NUL || git remote set-url origin {repo_url}")

    # Proceso de push
    print("[*] Preparando archivos...")
    if not run_command("git add ."):
        return

    print("[*] Creando commit...")
    # El commit podría fallar si no hay cambios
    run_command(f'git commit -m "{commit_msg}"')

    print("[*] Asegurando rama principal (main)...")
    run_command("git branch -M main")

    print("[*] Subiendo a GitHub...")
    print("[!] Nota: Si es la primera vez, es posible que se abra una ventana para iniciar sesión.")
    if run_command("git push -u origin main"):
        print("\n[+] ¡Éxito! El código ha sido subido a " + repo_url)
    else:
        print("\n[X] Error al subir. Verifica tus credenciales o conexión.")

if __name__ == "__main__":
    main()