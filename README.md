# @ase27-dev/chatui

<div align="center">

Une librairie React légère et personnalisable pour créer des interfaces de chat modernes et réactives.

[![GitHub release](https://img.shields.io/github/v/release/ase27-dev/chatui?sort=semver&style=flat-square)](https://github.com/ase27-dev/chatui/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/license/mit)
[![Issues](https://img.shields.io/github/issues/ase27-dev/chatui?style=flat-square)](https://github.com/ase27-dev/chatui/issues)

</div>

## 🎯 Caractéristiques

- ✨ **Composants réutilisables** — Chat, Bubble, liste de messages et bien plus
- 🎨 **Personnalisable** — Système de thème flexible via CSS variables ou props TypeScript
- 📱 **Responsive** — Design adaptatif pour tous les appareils
- ⚡ **Léger** — Minimaliste et performant
- 🔧 **TypeScript** — Support complet avec types inclus
- 🪝 **Hooks React** — `useMessages` pour gérer l'état des messages

## 📦 Installation

Ajoutez ceci dans le `.npmrc` de votre projet :

```ini
@ase27-dev:registry=https://npm.pkg.github.com
```

Puis installez le package :

```bash
npm install @ase27-dev/chatui
```

## 🚀 Usage

```tsx
import Chat, { Bubble, useMessages } from '@ase27-dev/chatui'
import type { MessageProps } from '@ase27-dev/chatui'

const MyChatbot = () => {
  const { messages, appendMsg } = useMessages([
    {
      _id: 'welcome',
      type: 'text',
      position: 'left',
      content: { text: 'Bonjour, comment puis-je vous aider ?' },
    },
  ])

  const handleSend = (type: string, val: string) => {
    appendMsg({ type: 'text', position: 'right', content: { text: val } })
  }

  const renderMessageContent = (msg: MessageProps) => {
    if (msg.type === 'text') {
      return <Bubble content={msg.content?.text} />
    }
    return null
  }

  return (
    <Chat
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
      navbar={{ title: 'Assistant', align: 'left' }}
      placeholder="Écrivez votre message..."
    />
  )
}
```

## 📖 API

### `<Chat />`

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `messages` | `MessageProps[]` | Liste des messages à afficher |
| `renderMessageContent` | `(msg: MessageProps) => ReactNode` | Fonction de rendu du contenu de chaque message |
| `onSend` | `(type: string, val: string) => void` | Appelée quand l'utilisateur envoie un message |
| `navbar` | `NavbarConfig` | Configuration de la barre de titre |
| `placeholder` | `string` | Placeholder du champ de saisie |
| `theme` | `ChatTheme` | Personnalisation des couleurs |
| `locale` | `string` | Locale pour l'internationalisation |

### `NavbarConfig`

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `title` | `string` | Titre affiché dans la navbar |
| `logo` | `string` | URL de l'image logo |
| `align` | `'left' \| 'center' \| 'right'` | Alignement du logo et du titre |
| `desc` | `string` | Sous-titre optionnel |
| `rightSlot` | `ReactNode` | Contenu libre à droite (ex : bouton fermer) |

### `useMessages(initialMessages?)`

```ts
const { messages, appendMsg, prependMsgs, updateMsg, deleteMsg, resetList } = useMessages([])
```

| Méthode | Description |
| ------- | ----------- |
| `messages` | Tableau courant des messages |
| `appendMsg(msg)` | Ajoute un message à la fin |
| `prependMsgs(msgs)` | Insère des messages au début (historique) |
| `updateMsg(id, msg)` | Met à jour un message existant par son `_id` |
| `deleteMsg(id)` | Supprime un message par son `_id` |
| `resetList(msgs?)` | Réinitialise la liste, avec des messages optionnels |

### `<Bubble />`

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `content` | `string` | Texte simple à afficher |
| `children` | `ReactNode` | Contenu riche (HTML, composants) |

```tsx
<Bubble content="Texte simple" />
<Bubble><div>Contenu riche</div></Bubble>
```

## 🎨 Theming

### Via prop TypeScript (recommandé)

```tsx
<Chat
  theme={{
    navbarBg: '#e00034',
    navbarColor: '#ffffff',
    messageListBg: '#f5f5f5',
    bubbleBg: '#ffffff',
    bubbleUserBg: '#e00034',
    footerBg: '#e00034',
    inputColor: '#ffffff',
    sendBtnBg: '#ffffff',
    sendBtnColor: '#e00034',
    bubbleRadius: '8px',
  }}
  ...
/>
```

### Via CSS variables

```css
.mon-chatbot {
  --chat-navbar-bg: #e00034;
  --chat-navbar-color: #ffffff;
  --chat-message-list-bg: #f5f5f5;
  --chat-bubble-bg: #ffffff;
  --chat-bubble-user-bg: #e00034;
  --chat-footer-bg: #e00034;
  --chat-input-color: #ffffff;
  --chat-input-placeholder-color: rgba(255, 255, 255, 0.6);
  --chat-send-btn-bg: #ffffff;
  --chat-send-btn-color: #e00034;
  --chat-send-btn-radius: 6px;
  --chat-bubble-radius: 12px;
  --chat-message-meta-color: #666666;
}
```

Un fichier `chat-theme.css` commenté est disponible dans le repo comme point de départ.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à créer une issue ou une pull request.

---

Créé avec ❤️ par [ASE27-Dev](https://github.com/ase27-dev)
