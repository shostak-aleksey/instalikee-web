import { classNames as c } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Navbar copy';
import { AppRouter } from './providers/router';


interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <main className={c('app', {}, [className])}>
        <Navbar/>
        <AppRouter />
        <Footer/>
    </main>
  );
};
