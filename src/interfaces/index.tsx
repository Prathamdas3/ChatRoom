interface Card {
  title: string;
  des: string;
}
interface AuthProp {
  isUser?: boolean;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
  userName?: string;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
}

// interface Message {
//   text: string;
//   createdAt: () => void;
// }

interface ChatProp {
  code: string;
}
