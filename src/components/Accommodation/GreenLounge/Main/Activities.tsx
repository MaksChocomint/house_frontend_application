import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Activities = () => {
  return (
    <Container styles={"mt-32"}>
      <h1 className="text-3xl text-center font-bold">Развлечения</h1>
      <div className="w-full grid grid-cols-1 smallTablet:grid-cols-2 text-center tablet:grid-cols-4 gap-8 mt-16">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/accommodation/green-lounge/activities/furako-park.png"
            alt="furako-park"
            width={130}
            height={130}
          />
          <h1 className="font-semibold text-2xl">Фурако парк</h1>
          <div className="h-1 w-3/4 bg-yellow-500/60"></div>
          <p className="font-light text-pretty">
            В поселке рядом с домами находится фурако парк. Это японские банные
            чаны с подогревом. Здесь можно прекрасно провести время в приятной
            компании, насладится купелью и отдохнуть в теплой беседке-куполе.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/accommodation/green-lounge/activities/fishing.png"
            alt="fishing"
            width={130}
            height={130}
          />
          <h1 className="font-semibold text-2xl">Рыбалка</h1>
          <div className="h-1 w-3/4 bg-yellow-500/60"></div>
          <p className="font-light text-pretty">
            На реке Истра вы сможете насладиться рыбалкой, поплавать на лодке в
            окружении леса и удивительных видов.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/accommodation/green-lounge/activities/sport.png"
            alt="sport"
            width={130}
            height={130}
          />
          <h1 className="font-semibold text-2xl">Спорт</h1>
          <div className="h-1 w-3/4 bg-yellow-500/60"></div>
          <p className="font-light text-pretty">
            {`Можно совершить сплавы на байдарках и SUP бордах с клубом активного
            отдыха "Речные котики" по реке Истра. Здесь вы можете арендовать
            велосипеды, лодку и многое другое.`}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/accommodation/green-lounge/activities/bath.png"
            alt="bath"
            width={130}
            height={130}
          />
          <h1 className="font-semibold text-2xl">{`Банный комплекс`}</h1>
          <div className="h-1 w-3/4 bg-yellow-500/60"></div>
          <p className="font-light text-pretty">
            Баня по уму: с ресурсным отдыхом, душевным общением, экологичным
            оздоровлением и обучением гармоничному состоянию.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Activities;
