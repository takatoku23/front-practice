import { createRoot } from 'react-dom/client';
import { Root } from '@/root';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);
