const buttons = document.querySelectorAll('.seat');

let seatCount = 0;

const tableContain = document.querySelector("#table-body");
const totalAmount = document.getElementById("total-amount");
const grandTotal = document.getElementById("grand-total");
const seatLeft = document.getElementById("seat-left");
const couponId = document.getElementById("coupon-id");
const couponApply = document.getElementById("coupon-apply");
const seat = document.getElementsByClassName("seat");

buttons.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('bg-green-500')) {
      seatCount--;
      seatLeft.textContent = Number(seatLeft.textContent) + 1
      totalAmount.textContent = Number(totalAmount.textContent) - 550
      grandTotal.textContent = Number(totalAmount.textContent)
      
      
    } else {
      seatCount++;
      seatLeft.textContent = Number(seatLeft.textContent) - 1
      const newRow = tableContain.insertRow();
      const cellOne = newRow.insertCell();
      const cellTwo = newRow.insertCell();
      const cellThree = newRow.insertCell();
      cellOne.textContent = seat.id;
      cellTwo.textContent = "Economy";
      cellThree.textContent = "550";
      totalAmount.textContent = Number(totalAmount.textContent) + 550
      grandTotal.textContent = Number(totalAmount.textContent)
    
      
    }
    seat.classList.toggle('bg-green-500');
    document.getElementById('seat-counter').innerHTML = seatCount;
  });
});

function applyCoupon(){

    const code = couponId.value
    if(code.toLowerCase() === "new15"){

        grandTotal.textContent = Number(totalAmount.textContent) * 0.85
    }

    else if(code.toLowerCase() === "couple20"){

        grandTotal.textContent = Number(totalAmount.textContent) * 0.80

    }

    else{

        grandTotal.textContent = Number(totalAmount.textContent)

    }

}

couponApply.addEventListener("click", applyCoupon)