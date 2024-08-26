import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList)
  const keyword = useSelector((state) => {
    console.log(
      'sss',state)

  })
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    console.log("keywird", keyword)
    console.log("keywird", contactList)
    if(keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      console.log('here')
      console.log('list', list)
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  },[keyword, contactList])
  return (
    <div>
      <SearchBox/>
      <div>
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ContactList