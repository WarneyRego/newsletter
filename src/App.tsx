import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';
import gatoImg from './images/gato.jpg';
import michaelImg from './images/michael.jpg';
import gabrielImg from './images/gabriel.jpg';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Jojo da Silva: O Gato Que Morreu de Desgosto Após Perder os Testículos",
    summary: "Uma história de tragédia, amor e testosterona. Na pacata cidade de Teresina, um felino conquistou corações e se tornou uma lenda local. Jojo da Silva, um gato carismático e cheio de energia, era conhecido por seu porte altivo e suas escapadas noturnas em busca de aventuras e, claro, romances. No entanto, o destino de Jojo tomou um rumo inesperado quando seus donos, preocupados com seu comportamento arisco e sua crescente população de 'herdeiros' na vizinhança, decidiram submetê-lo a uma castração. A operação transcorreu sem complicações. Mas, ao retornar para casa, Jojo parecia diferente. Seu olhar outrora vibrante carregava um peso existencial. Ele se recusava a brincar, ignorava seus petiscos favoritos e evitava seu tradicional posto de vigia na janela. Segundo relatos, passou dias encarando o vazio, refletindo sobre sua nova realidade. 'Era como se ele tivesse perdido mais do que apenas uma parte do corpo… Ele perdeu a vontade de viver,' relatou Dona Clotilde, vizinha que acompanhava a saga do gato desde sua juventude.",
    image: gatoImg
  },
  {
    id: 2,
    title: "Michael Jackson é encontrado vivo em terreiro de macumba no Piauí",
    summary: "A cidade de Piripiri, no interior do Piauí, foi palco de um dos eventos mais surpreendentes da história recente. Moradores locais afirmam que o rei do pop, Michael Jackson, foi encontrado vivo em um terreiro de macumba na região. O dono do local, José Paula Tejano da Silva, relatou o acontecimento inusitado: 'Tinha 7 frangos roubados no chão, e no dia seguinte tudo sumiu e ele tava lá. No começo, achei que fosse algum espírito, mas aí ele começou a dançar e fazer aquele Hee-Hee bem alto. Foi aí que eu vi que era ele mesmo.'",
    image: michaelImg
  },
  {
    id: 3,
    title: "Gabriel Araújo morre de desinteria após exagerar na academia",
    summary: "Gabriel Araújo, 26 anos, conhecido por sua obsessão por malhação, faleceu de desinteria após exagerar nos treinos e na suplementação. Ele passou horas na academia e consumiu uma quantidade absurda de shakes e suplementos, incluindo um pré-treino apelidado de 'Venom'. Horas depois, começou a passar mal e, após uma noite intensa no banheiro, não resistiu. A família homenageou Gabriel com uma lápide que diz: 'Malhou até o último suspiro'. Seu personal trainer lamentou: 'Ele foi longe demais.' Amigos relembraram sua dedicação e brincaram: 'Ele morreu fazendo o que amava: exagerando.' Gabriel deixa um legado de memes e a lição de que, às vezes, menos é mais. Descanse em paz — ou, como diriam na academia, 'em reps'.",
    image: gabrielImg
  }
];

function App() {
  const [mainNews, setMainNews] = useState<NewsItem>(newsItems[0]);

  const handleNewsClick = (news: NewsItem) => {
    setMainNews(news);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnpUEl4tO5fEUl-8mGMyTLVtllbfWPtD6UQ&s" 
              alt="Logo" 
              className="h-16 w-auto mb-3" 
            />
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">The Daily Tech</h1>
            <p className="text-gray-600 text-sm uppercase tracking-widest">Sua Fonte de Notícias</p>
            <div className="mt-4 text-sm text-gray-500">
              {new Date().toLocaleDateString('pt-br', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={mainNews.image}
                alt={mainNews.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {mainNews.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {mainNews.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <span className="mr-4">3 minutos de leitura</span>
                  <span>Polémico</span>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6">
              Outras Notícias
            </h3>
            {newsItems
              .filter(news => news.id !== mainNews.id)
              .map(news => (
                <div
                  key={news.id}
                  onClick={() => handleNewsClick(news)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm transition duration-300 group-hover:shadow-md">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition duration-300">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {news.summary}
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        <span>3 minutos de leitura</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;