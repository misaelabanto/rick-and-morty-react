export const PaginationButton = (props) => {
  return (
    <button onClick={props.onClick} className="h-10 p-2 m-4 text-center bg-yellow-500">
      {props.children}
    </button>
  )
}