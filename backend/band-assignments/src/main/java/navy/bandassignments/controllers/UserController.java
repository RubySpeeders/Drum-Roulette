package navy.bandassignments.controllers;

import navy.bandassignments.models.User;
import navy.bandassignments.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    @ResponseBody
    public List<User> findAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return users;
        } catch(Exception e) {
            System.out.println("whoops");
            return new ArrayList<User>();
        }
    }
}
