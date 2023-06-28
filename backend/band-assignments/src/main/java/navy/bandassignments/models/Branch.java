package navy.bandassignments.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "branch")
@Table(name = "branch")
@DynamicUpdate
public class Branch {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "branch_id")
    private Long branch_id;

    @Column(name = "branch_name")
    private String branch_name;

    @Column(name="nickname_id")
    private Long nickname_id;
}
