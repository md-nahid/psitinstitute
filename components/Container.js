import cn from 'classnames';

export default function Container({ children, flex, between, center, around }) {
  return (
    <div
      className={cn(
        'max-w-7xl w-full m-auto',
        flex && 'flex flex-wrap items-center',
        between && 'justify-between',
        center && 'justify-center',
        around && 'justify-around'
      )}
    >
      {children}
    </div>
  );
}
