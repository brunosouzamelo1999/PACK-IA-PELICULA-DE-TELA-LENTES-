import sys
import os
import subprocess

# Instala Pillow se necessário
try:
    from PIL import Image, ImageDraw
except ImportError:
    print("Pillow nao encontrado. Instalando...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw

def remove_checkerboard(input_path, output_path):
    print(f"Abrindo imagem: {input_path}")
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Vamos percorrer todos os pixels das bordas externas (superior, inferior, esquerda, direita).
    # Como a embalagem está centralizada e não encosta nas bordas, todos os pixels de borda são fundo.
    # O loop garante que limparemos tanto as áreas cinzas quanto as brancas do quadriculado.
    
    print("Executando remoção de fundo pelas bordas...")
    
    # Borda superior e inferior
    for x in range(width):
        # Borda superior
        r, g, b, a = img.getpixel((x, 0))
        if a != 0:
            ImageDraw.floodfill(img, (x, 0), value=(0, 0, 0, 0), thresh=35)
            
        # Borda inferior
        r, g, b, a = img.getpixel((x, height - 1))
        if a != 0:
            ImageDraw.floodfill(img, (x, height - 1), value=(0, 0, 0, 0), thresh=35)
            
    # Borda esquerda e direita
    for y in range(height):
        # Borda esquerda
        r, g, b, a = img.getpixel((0, y))
        if a != 0:
            ImageDraw.floodfill(img, (0, y), value=(0, 0, 0, 0), thresh=35)
            
        # Borda direita
        r, g, b, a = img.getpixel((width - 1, y))
        if a != 0:
            ImageDraw.floodfill(img, (width - 1, y), value=(0, 0, 0, 0), thresh=35)

    print(f"Salvando imagem final em: {output_path}")
    img.save(output_path, "PNG")
    print("Remoção concluída com sucesso!")

if __name__ == "__main__":
    workspace = r"C:\Users\bruno\.gemini\antigravity-ide\scratch\workana_packaging_ai"
    input_img = os.path.join(workspace, "pangox_original.jpeg")
    output_img = os.path.join(workspace, "pangox_transparente.png")
    
    if os.path.exists(input_img):
        remove_checkerboard(input_img, output_img)
    else:
        print(f"Erro: Arquivo {input_img} nao encontrado!")
