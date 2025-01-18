const loadPhone = async (searchText='13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json()
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones, isShowAll)
}

const displayPhone = (phones, isShowAll) => {
    // console.log(phones)

        // 1. Get the ID
    const phoneContainer = document.getElementById('phone-container')
    // Clear phone container cards before adding new cards
    phoneContainer.textContent = '';
    
    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }

// console.log('show all', isShowAll)


// diplay only first 12 phones if not show all

if(!isShowAll){
    phones = phones.slice(0,12)
}

    phones.forEach(phone => {
        // console.log(phone)
        // 2. Create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`
        // 3. Set inner html
        phoneCard.innerHTML = `
        <a href="#">
                        <img class="p-10 rounded-t-lg" src="${phone.image}" alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${phone.brand} ${phone.phone_name}</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            </div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <button onclick="handleShowDetail('${phone.slug}')" href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail Info</button>
                        </div>
                    </div>
                </div>  
        `;
        // 4. Append child 
        phoneContainer.appendChild(phoneCard)
    });

    // hide loading spinner
    toggleLoadingSpinner(false);
}

const handleShowDetail = async (id) => {
    // console.log('Hehe boi',id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data;
    showPhoneDetails(phone)
}

    const showPhoneDetails = (phone) => {
        console.log(phone)
        const phoneName = document.getElementById("show-detailed-phone-name")
        phoneName.innerHTML = phone.name;

        const showDetailedContainer =  document.getElementById("show-detailed-container")
        showDetailedContainer.innerHTML = `
        <div>
        
        <section>
            <div class="w-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src="${phone.image}"/>
            </div>
        </section>
            `

        // show the modal
        show_details_modal.showModal()
        console.log('Phone Details', phone)
    }

    // another way of doing
// const handleShowDetail = async (id) => {
//     try {
//         console.log('Hehe boi', id);
        
//         // Load single phone data
//         const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
//         const data = await res.json();
//         console.log(data);

//         // Pass the data to showPhoneDetails
//         showPhoneDetails(data);
//     } catch (error) {
//         console.error('Error fetching phone details:', error);
//     }
// };

// const showPhoneDetails = (phone) => {
//     // Show the modal
//     show_details_modal.showModal();

//     // Add logic to display phone details in the modal
//     console.log('Phone Details:', phone);
// };


// handle search button
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field1')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText, isShowAll);
    toggleLoadingSpinner(true)
}

// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true)
//     const searchField = document.getElementById('search-field2')
//     const searchText = searchField.value;
//     console.log(searchText)
//     loadPhone(searchText)
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner =  document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

// handle show all
const handleShowAll = () =>{
    handleSearch(true)
}

// document.getElementById('search-btn').addEventListener('click', () => {
//     const searchField = document.getElementById('search-field1')
//         const searchText = searchField.value;
//         console.log(searchText)
//         loadPhone(searchText)
// })

loadPhone()

