package navy.bandassignments.controllers;

import navy.bandassignments.models.User;
import navy.bandassignments.repositories.UserRepository;
import navy.bandassignments.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @ResponseBody
    public List<User> findAllUsers() {
        return userService.findAll();
    }
}
