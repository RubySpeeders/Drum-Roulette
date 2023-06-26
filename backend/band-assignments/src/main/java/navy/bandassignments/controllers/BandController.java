package navy.bandassignments.controllers;

import navy.bandassignments.models.Band;
import navy.bandassignments.repositories.BandRepository;
import navy.bandassignments.services.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// In the database, presently the word "band" refers to the "ensemble" table
@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class BandController {

    @Autowired
    private BandService bandService;

    @GetMapping("/bands")
    @ResponseBody
    public List<Band> findAllBands() {
        return bandService.findAll();
    }
}