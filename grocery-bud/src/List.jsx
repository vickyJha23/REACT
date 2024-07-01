const List = ({list}) => {
    return (
        <div>
            {list.map((item) => {
                const {id, title} = item;
                return (
                    <div key = {id}>
                          <p>{title}</p>
                          <div>
                                <button>edit</button>
                                <button>delete</button>
                          </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;