import MainPage from '@/pages/MainPage';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Navbar copy';




export const App = () => {
  return (
    <main className='app'>
        <Navbar/>
        <MainPage/>
        
          <Footer/>
        
    </main>
  );
};
