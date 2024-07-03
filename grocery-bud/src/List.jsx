import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const List = ({list, editItem, deleteItem}) => {
    return (
        <div>
            {list.map((item) => {
                const {id, title} = item;
                return (
                    <div key = {id} className="bg-blue-400 flex rounded-[4px] px-[0.5rem] py-[0.25rem] justify-between">
                          <p className="capitalize tracking-[2px] text-white">{title}</p>
                          <div>
                                <button onClick = {() => {
                                      editItem(id);
                                }} className="mx-[0.5rem] text-[#155724]">
                                     <FontAwesomeIcon icon={["fas", "pen-to-square"]} />
                                </button>
                                <button onClick={() => {
                                      deleteItem(id);
                                }} className="mx-[0.5rem] text-[#721c24]">
                                    <FontAwesomeIcon icon={["fas", "trash"]} />
                                </button>
                          </div>
                    </div>
                )
            })}
        </div>
    )
}
export default List;