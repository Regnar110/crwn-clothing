export const addItemToCart = (cartItems, cartItemToAdd) => { // utils function. Funkcja która pozwala na utrzymanie czystego i przejrzystego kodu. Ta funkcja ma za zadanie sprawdzac czy dodawany przedmiot do koszyka juz sie w nim znajduje.
    const existingCartitem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartitem) { // jeżeli existingCartItem istnieje...
        return cartItems.map(cartItem =>   //zwracamy nową tablicę( BO KOMPONENT MUSI SIĘ WYRENDEROWAĆ NA NOWO)
            cartItem.id === cartItemToAdd.id   // sprawdzamy czy pszczególny item się powtarza ( sprawdzamy po ID)
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // jeżeli sie powtarza to zwracamy ten sam obiekt ze zmienionym quantity o + 1
            : cartItem // jeżeli się nie powtarza to zwracamy stary cartItem bez zmian quantity
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}] // jeżeli existingCartItem nie istnie e to zwracamy tablicę z wszystkimi itemami CartItems i nowym CartItemToAdd do którego dodajemy od razu quantity. W ten sposób każdy dodany przedmiot(dodany po raz pierwsyz) będzie miał quantitny
}