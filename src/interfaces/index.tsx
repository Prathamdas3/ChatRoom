interface Card {
  title: string;
  des: string;
}
interface AuthProp {
  isUser: boolean;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface Message {
//   text: string;
//   createdAt: () => void;
// }

interface ChatProp {
  code: string;
}
