const Card = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

// ADD THIS LINE AT THE BOTTOM
export default Card;