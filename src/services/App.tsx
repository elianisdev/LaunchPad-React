import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import MovieList from '../components/Movies/MovieList';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="bg-gray-100 min-h-screen">
                <header className="bg-blue-600 text-white py-4">
                    <h1 className="text-center text-2xl font-bold">Free Movies and Series</h1>
                </header>
                <main className="py-8">
                    <MovieList />
                    <AppRouter />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;