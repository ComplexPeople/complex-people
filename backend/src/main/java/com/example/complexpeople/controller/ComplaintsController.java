package com.example.complexpeople.controller;

import com.example.complexpeople.dto.ComplaintDTO;
import com.example.complexpeople.model.Complaint;
import com.example.complexpeople.service.ComplaintService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequiredArgsConstructor
@Tag(name = "Complaints and/or Maintenance")
public class ComplaintsController {


    private final ComplaintService complaintService;

    public ComplaintsController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping("/issues")
    ResponseEntity<Complaint> addComplaint(@RequestBody() @Valid ComplaintDTO complaintDTO) {

        Complaint complaint = complaintService.createComplaint(complaintDTO);

        return new ResponseEntity<>(complaint, HttpStatus.CREATED);

    }

    @DeleteMapping("/issues")
    ResponseEntity<Complaint> removeComplaint(int id) {
        Complaint complaint = complaintService.removeComplaint(id);
        return new ResponseEntity<>(complaint, HttpStatus.OK);
    }

    @GetMapping("/issues")
    ResponseEntity<List<Complaint>> getAllComplaints() {
        List<Complaint> allComplaints = complaintService.getAllComplaints();
        return new ResponseEntity<>(allComplaints, HttpStatus.OK);

    }

    @GetMapping("/issues/{id}")
    ResponseEntity<Complaint> getSpecificComplaint(@PathVariable int id) {
        Complaint specificComplaint = complaintService.getSpecificComplaint(id);
        return new ResponseEntity<>(specificComplaint, HttpStatus.OK);
    }

    @PatchMapping("/issues")
    ResponseEntity<Complaint> updateComplaint(@RequestParam int id,
                                              @RequestParam(required = false) int status,
                                              @RequestParam(required = false) String desc,
                                              @RequestParam(required = false) int staffId) {
        Complaint complaint = complaintService.updateComplaint(id, status, staffId, desc);
        return new ResponseEntity<>(complaint, HttpStatus.OK);

    }


}
