// import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  // console.log(CDN_URL);
  // console.log(CDN_URL);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg ">
                Add +
              </button>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
