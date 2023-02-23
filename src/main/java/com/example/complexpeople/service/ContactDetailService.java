package com.example.complexpeople.service;

import com.example.complexpeople.dto.ContactDetailDTO;
import com.example.complexpeople.exception.ValidationException;
import com.example.complexpeople.model.ContactDetail;
import com.example.complexpeople.model.User;
import com.example.complexpeople.repository.ContactDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactDetailService {
    private final ContactDetailRepository contactDetailRepository;


    public ContactDetail createOrUpdate(ContactDetail contactDetail) {
        if (contactDetail.getPhoneNumber() == null)
        {
            throw new ValidationException("Phone number should be specified");
        }
        return contactDetailRepository.save(contactDetail);
    }


    public ContactDetail update(User user, ContactDetailDTO contactDetailDTO) {
        ContactDetail contactDetail = user.getContactDetail();
        contactDetail.setPhoneNumber(contactDetailDTO.getPhoneNumber());
        return createOrUpdate(contactDetail);
    }
}
