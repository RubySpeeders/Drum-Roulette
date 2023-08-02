package navy.bandassignments.repositories;

import navy.bandassignments.models.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BandRepository extends JpaRepository<Band, Long> {
}


