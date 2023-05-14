package navy.bandassignments.controllers;

import navy.bandassignments.models.Band;
import navy.bandassignments.repositories.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class BandController {

    @Autowired
    private BandRepository bandRepository;

    @GetMapping("/bands")
    @ResponseBody
    public List<Band> findAllBands() {
        try {
            List<Band> bands = bandRepository.findAll();
        } catch(Exception e) {
            System.out.println("whoops");
        }
        return bandRepository.findAll();
    }
}