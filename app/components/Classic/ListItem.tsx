import Card from "./Card";
export type Image = {
  id: number;
  frontImage: string;
  backImage: string;
};
export default function ListItem() {
  const listImage: Image[] = [
    {
      id: 1,
      frontImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF251_GRY100_1_2fcd5186-19c0-46be-b222-6da8286f7f1e_1800x1800.jpg?v=1703091842",
      backImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF251_GRY100_5_959a4df5-5ed3-46ef-bea3-ec0920b8c9aa_1800x1800.jpg?v=1703091842",
    },
    {
      id: 2,
      frontImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF258_WHT000_1_bffca467-44ef-4724-8078-221cc92a48fa_600x.jpg?v=1696817944",
      backImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF258_WHT000_5_f353c5ab-985c-4c16-8235-eea53ffb306f_600x.jpg?v=1696817943",
    },
    {
      id: 3,
      frontImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF133_BLU000_1_59611d57-c7ae-49a1-af9a-de74148bd86c_600x.jpg?v=1691634645",
      backImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF133_BLU000_5_650c79e8-1ccc-4487-ae04-45cf51f878dc_600x.jpg?v=1691684602",
    },
    {
      id: 4,
      frontImage:
        "https://lynvn.com/cdn/shop/products/LL23FBF075_WHT800_1_1800x1800.jpg?v=1687761272",
      backImage:
        "https://lynvn.com/cdn/shop/products/LL23FBF075_WHT800_5_1800x1800.jpg?v=1687797611",
    },
    {
      id: 5,
      frontImage:
        "https://lynvn.com/cdn/shop/files/LL23FBF034_WHT000_1_1800x1800.jpg?v=1691481636",
      backImage:
        "https://lynvn.com/cdn/shop/products/LL23FBF034_WHT000_5_1800x1800.jpg?v=1691481636",
    },
    {
      id: 6,
      frontImage:
        "https://lynvn.com/cdn/shop/products/LL23CBF170_BLU100_1_1800x1800.jpg?v=1673505908",
      backImage:
        "https://lynvn.com/cdn/shop/products/LL23CBF170_BLU100_5_1800x1800.jpg?v=1673571955",
    },
  ];
  return (
    <div className="grid grid-flow-row gap-5 sm:grid-flow-col sm:grid-cols-3 sm:first-letter:grid-rows-[1fr]">
      <div className="">
        <Card image={listImage[0]} />
        <Card image={listImage[1]} />
      </div>
      <div className="">
        <Card image={listImage[2]} />
        <Card image={listImage[3]} />
      </div>
      <div className="">
        <Card image={listImage[4]} />
        <Card image={listImage[5]} />
      </div>
    </div>
  );
}
