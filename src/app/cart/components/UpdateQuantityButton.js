const UpdateQuantityButton = ({ productId, action, quantityValue }) => {

    const value = action ==='increment' ? ++quantityValue : --quantityValue;

    const UPDATE_URL = `/api/cart/${productId}/quantity/${value}`;

    return (
      <form action={UPDATE_URL} method="POST">
        <button
          type="submit"
        >
            {/* Plus Icon */}
            {action === 'increment' &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>              
            }

            {action === 'decrement' &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-2 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            }
        </button>
      </form>
    );
  };
  
  export default UpdateQuantityButton;
  