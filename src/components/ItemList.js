// import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  // console.log(CDN_URL);
  // console.log(CDN_URL);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          {/* <img
            src={CDN_URL + item.card.info.imageId}
            alt="item"
            className="w-40 h-40 object-cover"
          /> */}
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
              ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
