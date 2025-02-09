import MainPage from '@/pages/MainPage';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Navbar copy';




export const App = () => {
  return (
    <main className='app overflow-x-hidden'>
        <Navbar/>
        <MainPage/>
        <Footer/>
    </main>
  );
};
