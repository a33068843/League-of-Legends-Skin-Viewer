import { Card } from '@/components';

export const ChampionCard = ({ data = {} }) => {
  const championNameArray = Object.keys(data);
  return (
    <>
      {championNameArray.map((item) => {
        const name = data[item].name;
        const title = data[item].title;
        return (
          <Card key={item} id={item} name={name} title={title} />
        );
      })}
    </>
  );
};
