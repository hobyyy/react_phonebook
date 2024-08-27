let initialState = {
  contactList:[],
  keyword:""
};

function reducer(state = initialState, action) {
  const {type, payload} = action
  // console.log('type', type)
  // console.log('type', payload)
  switch(type) {
    case "ADD_CONTACT":
      return{
        ...state, 
        contactList:[
          ...state.contactList,
          {
            name:payload.name, 
            phoneNum:payload.phoneNum
          },
        ],
      };
    case "SEARCH_BY_NAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  };
}

export default reducer;