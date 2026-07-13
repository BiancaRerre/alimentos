# Jogo de Classificação de Alimentos (NOVA) 🍎🥣🍕

Um jogo educativo, interativo e altamente polido projetado para ensinar os jogadores a classificar alimentos de acordo com o **Guia Alimentar para a População Brasileira** (Sistema de Classificação NOVA):
- 🌱 **In Natura**
- 🥣 **Minimamente Processados**
- 🍕 **Ultraprocessados**

---

## 🚀 Recursos Principais e Melhorias de UX

Este projeto foi otimizado e expandido para oferecer uma experiência de usuário (UX) premium em todas as plataformas:

1. **Compatibilidade Móvel Universal (Touch e Stylus)**:
   - Substituição do arrasto HTML5 nativo por **Pointer Events** de alta performance.
   - Suporte nativo para **toque (dedos)**, canetas stylus (**S-Pen** da Samsung) e mouse no desktop.
   - Bloqueio inteligente de rolagem da página (`touch-action: none`) ao arrastar itens no celular.

2. **Doca Flutuante Dinâmica (`#floating-dock`)**:
   - Ao iniciar o arrasto de qualquer alimento, uma barra flutuante com efeito *glassmorphism* (desfoque de fundo) surge suavemente no rodapé.
   - Facilita o drop rápido das categorias no celular sem precisar rolar telas longas.

3. **Nome do Alimento em Destaque ("Fonte Docinha")**:
   - Exibe o nome do alimento que você está segurando em tempo real na doca.
   - Estilizado em um balão dinâmico com a fonte fofa **Fredoka** (Google Fonts) e efeito de surgimento *pop*.

4. **Cronômetro e Contador de Erros**:
   - Um cronômetro integrado no topo (`Tempo: MM:SS`) acompanha a duração da rodada.
   - Um contador em vermelho registra os deslizes cometidos pelo jogador (`Erros: X`) em tempo real.

5. **Revisão de Erros Interativa**:
   - Se o jogador terminar a partida com erros, uma seção *"Revisão de Erros"* é exibida ao final com os itens destacados em vermelho.
   - Clicar sobre qualquer alimento errado abre um modal detalhado contendo a foto, a escolha feita pelo jogador, a categoria correta e uma **explicação científica/nutricional detalhada** do porquê o alimento pertence àquela categoria.

6. **Painel de Ajuda Embutido (?)**:
   - Botão flutuante fixado no topo direito que abre um cartão explicativo detalhado sobre as três categorias de alimentos, facilitando o aprendizado a qualquer momento.

7. **Persistência de Resultados**:
   - O jogo está integrado com o **Firebase Realtime Database** para registrar o nome dos participantes, número de acertos, erros e tempo de conclusão.

8. **Otimização Extrema e Organização de Imagens**:
   - **Estrutura Profissional**: Todos os assets de alimentos foram movidos da raiz para uma pasta dedicada `/img`, deixando o repositório organizado e limpo.
   - **Conversão em Alta Fidelidade**: As imagens foram convertidas para o moderno formato **WebP** otimizado para web.
   - **Remoção de Fundo (Transparência Sem Halos)**: Executamos um algoritmo de *flood fill* a partir dos cantos diretamente na imagem original de alta resolução para remover o fundo sólido, garantindo um recorte perfeito.
   - **Enquadramento Inteligente (FIT/CONTAIN)**: Redimensionadas para exatamente `320x320` pixels mantendo a proporção original de cada alimento e centralizando-os em um canvas transparente (evitando qualquer corte indesejado na arte).
   - **Suavização de Bordas (Anti-aliasing)**: Processamento no canal Alpha da imagem (*feathering*) usando desfoque gaussiano suave na resolução de 320x320, eliminando serrilhados e integrando as bordas de forma suave.
   - O peso total da pasta de imagens caiu de **12.71 MB** para apenas **695.7 KB**, reduzindo drasticamente o consumo de internet móvel e carregando o jogo de forma instantânea.

9. **Modos de Jogo Selecionáveis**:
   - **Modo Tradicional**: O clássico do jogo original, permitindo classificar todos os 54 alimentos em uma única rodada.
   - **Modo Aventura (Fases)**: Uma jornada dividida em 5 fases com dificuldade progressiva, com menos alimentos por fase, introduzindo novos alimentos e revisando erros fase a fase!





---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Semântico)
- **Vanilla CSS3** (Flexbox, Grid, Animações customizadas, Glassmorphism, Responsividade)
- **Vanilla JavaScript** (ES6, Pointer Capture API, Dynamic DOM)
- **Firebase SDK** (Database)
- **Google Fonts** (Inter & Fredoka)

---

## 👨‍💻 Autores e Créditos

- **Bianca Rerre** - [GitHub](https://github.com/BiancaRerre) | [Website](https://rerre.net/)  
  *Desenvolvimento das melhorias de UX, compatibilidade mobile/touch/stylus, cronômetro, revisão de erros detalhada, central de ajuda e polimento visual.*
- **rjfontana** - [GitHub](https://github.com/rjfontana)  
  *Idealização, banco de imagens e base de código original do projeto.*

---

## 🎮 Como Jogar Localmente

Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador moderno. 

Se quiser rodar um servidor local rápido (ideal para testar em dispositivos móveis na mesma rede Wi-Fi):
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```
Acesse o jogo no navegador local usando o endereço `http://localhost:8000` (ou o IP local do seu computador na rede).
