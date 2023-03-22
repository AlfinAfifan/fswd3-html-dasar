const url = 'https://crudcrud.com/api/96f49725d7f0497ea04dbd9ccacc9b7c/todolist';
let input = document.querySelector('.input');
const tambah = document.querySelector('.tambah');

// TAMPILKAN TODO LIST
function updateList() {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const dataList = response;
      dataList.forEach((data) => {
        const newList = document.querySelector('.containerList');
        let newTodo = `<li class="list-group-item d-flex justify-content-between listBaru">
                        <div>
                          <input class="form-check-input me-1 ceklis" type="checkbox" id="firstCheckbox" value="yes" onclick="ceklis(this)"/>
                          <label class="form-check-label textCeklis" for="firstCheckbox">${data.list}</label>
                        </div>
                        <span class="badge text-bg-danger hapus" data-id="${data._id}">X</span>
                      </li>`;
        newList.insertAdjacentHTML('afterbegin', newTodo);
        input.focus();
        console.log(data);
      });
    });
}
updateList();

// TAMBAH TODO LIST
tambah.addEventListener('click', function () {
  tambahList();
  location.reload();
});

function tambahList() {
  const data = { list: input.value };
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(url, option)
    .then((response) => response.json())
    .then((response) => response);
}

// HAPUS
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('hapus')) {
    const listBaru = e.target.parentElement;
    listBaru.remove();
    const id = e.target.dataset.id;
    hapusList(id);
  }
});

function hapusList(id) {
  const option = {
    method: 'DELETE',
  };
  fetch(url + '/' + id, option).then((response) => response);
}

// CEKLIST
function ceklis(e) {
  let selesai = e.nextElementSibling;
  selesai.classList.toggle('text-decoration-line-through');
  //   // t.nextSibling.classList.toggle('text-decoration-line-through');
  //   // let checkbox = document.querySelectorAll('.ceklis');
  //   // for (let i = 0; i < checkbox.length; i++) {
  //   //   const selesai = checkbox[i];
  //   //   selesai.addEventListener('change', function () {
  //   //     console.log('ok');
  //   //     // selesai.nextElementSibling.classList.toggle('text-decoration-line-through');
  //   //   });
  //   // }
}
