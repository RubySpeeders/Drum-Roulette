package navy.bandassignments.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;


import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "ensemble")
@Table(name = "ensemble")
@DynamicUpdate
public class Band {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "ensemble_id")
    private Long band_id;

    @Column(name = "ensemble_name")
    private String band_name;

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private Branch branch;

}


