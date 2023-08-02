package navy.bandassignments.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import navy.bandassignments.models.Band;
import navy.bandassignments.repositories.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
@NoArgsConstructor
public class BandServiceImpl implements BandService {

    @Autowired
    private BandRepository bandRepository;

    public List<Band> findAll() {
        List<Band> bands = new ArrayList<Band>();
        try {
            bands = bandRepository.findAll();
        } catch(Exception e) {
            System.out.println("Error finding bands."); // TODO: Replace with logger
        }
        return bands;
    }
}
