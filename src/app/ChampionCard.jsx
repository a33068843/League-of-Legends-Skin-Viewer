import { Card } from '@/components';

export const ChampionCard = ({ data }) => {
  const championNameArray = Object.keys(data);
  console.log(championNameArray);
  return (
    <>
      <Card
        id={'Aatrox'}
        name={data['Aatrox'].name}
        title={data['Aatrox'].title}
      />
      {/* {championNameArray.map((item) => {
        const name = data[item].name;
        const title = data[item].title;
        return <Card id={item} name={name} title={title} />;
      })} */}
    </>
  );
};
