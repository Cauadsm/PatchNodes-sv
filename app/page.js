import Link from "next/link";
import "./globals.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-cols-10 p-4 mt-5 mb-5 ml-10 mr-10 border border-gray-200 rounded-md h-fit">
      <div className="col-span-8">
        <div className="border shadow border-zinc-200 min-w-fit">
          <div className="flex justify-between p-1 text-gray-600 bg-zinc-200">
            <h3>Patch de Atualização - 0.2v</h3>
            <p>09 de Out. de 2023 às 2:45PM</p>
          </div>
          <div className="p-1">
            <Image
              className="w-full border"
              src="/images/p2-img1.png"
              width={10000}
              height={10000}
            />
            <p className="ml-2 mr-2">
              - Foi adicionado LevelMobs, agora o servidor possuí mobs com
              leveis, o mob vão spawnar baseado na sua força. O máximo que o mob
              pode nascer é lvl 100, mas é raro, e seria quase um bom se vc nao
              tiver muito forte, então evitem.
              <br></br>- O MOB agora dropa mais itens e mais xp baseado no seu
              nível.
              <br></br>- Skill: Adicionado sistema de skill no servidor
              utilizando o comando /skills você abre a INTERFACE. Se vc tiver
              skills em determinado ramo como por exemplo Farming. Você pode ter
              skills como ganhar mais crops, replantar automático. Existem
              varias outra habilidades.
              {/* <br></br>
          -  Para acessar a loja virtual, /market. Ouve uma mudança por questões internas de outros plugin que utilizavam comandos parecidos. */}
              {/* <br></br>
          -  Ouve uma mudança de HOST, agora possuímos uma host própria teremos um melhor desempenho e servidor ficará 24h online.
          <br></br>
          -  Aumento do preço dos itens para compra no /market, para o incentivo de comercio com outros jogadores.
          <br></br>
          - Se os jogadores quiserem fazer uma loja de baú, segue a baixo a imagem exemplo para ser criado.
Quantidade: Unidades que serão vendidas ou compradas.
B: Comprar  S: Vender
Exemplo: B 100 : 100 S     &lt;- Comprar por 100 e vender por 100
Nome do Item: Aqui você bota o nome do item que vc quer em inglês, ou colocar " ? " que vai setar o item que está dentro do primeiro slot dentro do baú */}
            </p>
            <Link
              href="/patch/post2"
              className="p-1 text-white transition bg-blue-500 rounded-sm hover:text-gray-300 w-fit hover:bg-blue-700"
            >
              Leia-mais
            </Link>
          </div>
        </div>
        <div className="mt-3 border shadow border-zinc-200">
          <div className="flex justify-between p-1 text-gray-600 bg-zinc-200">
            <h3>Patch de Atualização - 0.1v</h3>
            <p>07 de Out. de 2023 às 9:17AM</p>
          </div>
          <div className="p-1 mb-3">
            <Image
              className="w-full border"
              src="/images/p-img1.png"
              width={10000}
              height={10000}
            />
            <p className="ml-2 mr-2">
              - Adicionado score-board personalizada do servidor, contendo
              informações: Nome do Jogador, Dinheiro, e Jogadores Online.
              <br></br>- Adicionado sistema de compra e vende entre player,
              através de baús.(Um player pode ter sua própria loja e vender sem
              estar online, ou presente).
              <br></br>- Para conseguir dormir é preciso estar deitado 50% dos
              jogadores online no momento.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 ml-3 border shadow border-zinc-200">
        <div className="flex justify-between p-1 text-gray-600 bg-zinc-200">
          <h1>socials</h1>
        </div>
      </div>
    </div>
  );
}
