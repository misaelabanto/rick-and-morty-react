export const CharacterStatus = (props) => {
  const colors = {
    'Alive': 'bg-green-500',
    'Dead': 'bg-red-500',
    'unknown': 'hidden'
  };
  const classes = [
    colors[props.status], 
    'px-1',
    'text-center',
    'rounded-full'
  ];
  const status = props.status === 'unknown' ? '' : props.status;
  return (
    <div className={classes.join(' ')}>{status}</div>
  )
}