package navy.bandassignments.models;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "band")
@Table(name = "band")
@DynamicUpdate
public class Band {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "band_id")
    private Long band_id;

    @Column(name = "band_name")
    private String band_name;

    @Column(name="band_nickname_id")
    private Long band_nickname_id;

    @Column(name="sub_band_id")
    private Long sub_band_id;
}


