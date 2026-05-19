# Dama & HP - Landing Page

Landing page comercial para o projeto **Dama & HP**, um tabuleiro de damas tecnológico inspirado no universo de Harry Potter, com prévia jogável do jogo.

## 🧙‍♂️ Sobre o Projeto

- **Stack:** React 19 + TypeScript + TailwindCSS 4 + Vite 8
- **Animações:** Framer Motion
- **Roteamento:** React Router DOM
- **Ícones:** Lucide React

## 🎮 Funcionalidades

### Landing Page
- Design "Modern Wizard" com paleta de cores sombrias e douradas
- Hero com vídeo de background
- Seções: Sobre, Modelos de Tabuleiros, Diferenciais, Contato
- Navbar fixa com botão para prévia do jogo
- Partículas flutuantes no background

### Prévia do Jogo (`/game`)
- Tabuleiro 8x10 interativo
- 2 jogadores (hotseat) na mesma tela
- Movimentação e captura de peças
- Promoção a Arquimago (chegar na última fileira)
- 3 temas visuais: Arena do Dragão, Lago Negro, Labirinto
- Imagens de fundo temáticas

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura

```
src/
├── components/
│   ├── game/        # Componentes do jogo (Board, Piece, Square, GameInfo)
│   ├── layout/     # Navbar, GameLayout
│   ├── sections/   # Seções da landing (Hero, About, Models, Features, Contact)
│   └── ui/         # Componentes reutilizáveis (Button, ParticleBackground)
├── hooks/          # useGame - lógica do jogo
├── lib/            # theme.ts, animations.ts, gameLogic.ts
└── pages/          # Landing.tsx, GamePreview.tsx
```

## 🎨 Paleta de Cores

| Elemento | Cor |
|----------|-----|
| Fundo | `#1A1A1A` (Deep Charcoal) |
| Títulos/CTAs | `#D4A017` (Antique Gold) |
| Texto | `#F0E6D2` (Ivory Parchment) |
| Bordas | `#C69C6D` (Golden Tan) |

## 📄 Licença

MIT License - See LICENSE file for details.