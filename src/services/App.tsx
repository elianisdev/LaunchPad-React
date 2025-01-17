import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from '../components/Movies/MovieList';
import MovieDetails from '../components/Movies/MovieDetails';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="bg-gray-100 min-h-screen">
                <header className="bg-blue-600 text-white py-4">
                    <h1 className="text-center text-2xl font-bold">Movies and Series</h1>
                </header>
                <main className="py-8">
                    <Routes>
                        <Route path="/" element={<MovieList />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;