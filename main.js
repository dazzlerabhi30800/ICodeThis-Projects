const groupData = [
    {
        image: 'https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80',
        title: "Cuisine",
        member: 36,
        active: true,
    },

    {
        image: 'https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: "Art",
        member: 9,
        active: false,
    },

    {
        image: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
        title: "Workout",
        member: 27,
        active: true,
    },

    {
        image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        title: "Gaming",
        member: 105,
        active: false,
    },

    {
        image: 'https://images.unsplash.com/photo-1600807497639-3b5d8e74a232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: "Hiking",
        member: 97,
        active: true,
    },

    {
        image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: "Yoga",
        member: 65,
        active: false,
    },
]
const groupWrapper = document.querySelector('.group--wrapper');

const createGroup = `
           <div class="create-group">
            <button class="create--btn"><i class="fas fa-plus"></i></button>
            <p>Create Group</p>
          </div> 
`;


const groupComps = groupData.map((group) => {
    let { title, image, member, active } = group;
    return (
        `
        <div class="group ${active ? "active" : ""}">
        <img
         src=${image}
         alt=""
        />
        <h2>${title}</h2>
        <p class="members">${member} members</p>
        </div>

        `
    )
}).join('');

groupWrapper.innerHTML = `
${createGroup}
${groupComps}
            `



// Handle Layouts
const flexLayout = document.querySelector('.flex-layout');
const columnLayout = document.querySelector('.column-layout');


let flexEnable = true;



function handleFlexLayout() {
    document.body.style.setProperty('--group-card-layout', "column");
    document.body.style.setProperty('--card-height', "160px");
    document.body.style.setProperty('--group-card-basis', "20%");
    document.body.style.setProperty('--justify-group-layout', "center");
    document.body.style.setProperty('--group-layout', "row");
    groupWrapper.style.flexWrap = 'wrap';
    flexLayout.classList.add('active');
    columnLayout.classList.remove('active');
}


function handleColumnLayout() {
    document.body.style.setProperty('--group-layout', "column");
    document.body.style.setProperty('--card-height', "80px");
    document.body.style.setProperty('--group-card-basis', "100%");
    document.body.style.setProperty('--group-card-layout', "row");
    document.body.style.setProperty('--justify-group-layout', "space-between");
    flexLayout.classList.remove('active');
    columnLayout.classList.add('active');
    groupWrapper.style.flexWrap = 'nowrap';
}

flexLayout.addEventListener('click', () => {
    if (!flexEnable) return;
    handleFlexLayout()
});

columnLayout.addEventListener('click', handleColumnLayout);


function handleResize() {
    if (window.innerWidth > 750) {
        flexEnable = true;
    }
    else {
        handleColumnLayout();
        flexEnable = false;
    }
}

window.addEventListener('resize', handleResize);


handleResize();
