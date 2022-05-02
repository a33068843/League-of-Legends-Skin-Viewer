import { Card } from '@/components';

export const ChampionCard = ({ data = {}, searchText }) => {
  const championNameArray = Object.keys(data);
  return (
    <>
      {championNameArray.map((item) => {
        const name = data[item].name;
        const title = data[item].title;
        const nameEn = item.toLowerCase();
        const search = searchText.toLowerCase();
        if (!name.includes(searchText) && !nameEn.includes(search)) {
          return;
        }
        return (
          <Card key={item} id={item} name={name} title={title} />
        );
      })}
    </>
  );
};
