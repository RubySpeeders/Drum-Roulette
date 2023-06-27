package navy.bandassignments.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import navy.bandassignments.models.User;
import navy.bandassignments.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        try {
            List<User> users = userRepository.findAll();
            return users;
        } catch(Exception e) {
            System.out.println("No users found");
            return new ArrayList<>();
        }
    }
}
