package navy.bandassignments.services;

import navy.bandassignments.models.Band;
import org.springframework.stereotype.Service;
import java.util.List;

public interface BandService {
    List<Band> findAll();
}
