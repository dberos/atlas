-- MySQL Script generated by MySQL Workbench
-- Πεμ 05 Ιαν 2023 10:05:24 μμ EET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sdi1600269
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sdi1600269` ;

-- -----------------------------------------------------
-- Schema sdi1600269
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sdi1600269` ;
USE `sdi1600269` ;

-- -----------------------------------------------------
-- Table `sdi1600269`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sdi1600269`.`users` ;

CREATE TABLE IF NOT EXISTS `sdi1600269`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO users
VALUES
    (1, 'dberos@atlas.com', '1234', null, 'undergraduate'),
    (2, 'mroussou@eam.com', '1234', null, 'company'),
    (3, 'pcharalampous@atlas.com', '1234', null, 'undergraduate'),
    (4, 'akolovou@eam.com', '1234', null, 'company');

-- -----------------------------------------------------
-- Table `sdi1600269`.`undergraduates`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sdi1600269`.`undergraduates` ;

CREATE TABLE IF NOT EXISTS `sdi1600269`.`undergraduates` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `field` VARCHAR(45) NOT NULL,
  `university` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_undergraduates_1`
    FOREIGN KEY (`id`)
    REFERENCES `sdi1600269`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO undergraduates
VALUES
    (1, 'Dimitris', 'Beros', 'Πληροφορική','ΕΚΠΑ'),
    (3, 'Panagiotis', 'Charalampous', 'Πληροφορική','ΕΚΠΑ');

-- -----------------------------------------------------
-- Table `sdi1600269`.`companies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sdi1600269`.`companies` ;

CREATE TABLE IF NOT EXISTS `sdi1600269`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `town` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `street_number` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_companies_1`
    FOREIGN KEY (`id`)
    REFERENCES `sdi1600269`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO companies
VALUES
    (2, 'Eam1', 'Καισαριανή', 'Εθνικής Αντιστάσεως', 1),
    (4, 'Eam2', 'Καισαριανή', 'Εθνικής Αντιστάσεως', 2);

-- -----------------------------------------------------
-- Table `sdi1600269`.`internship`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sdi1600269`.`internship` ;

CREATE TABLE IF NOT EXISTS `sdi1600269`.`internship` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `field` VARCHAR(45) NOT NULL,
  `university` VARCHAR(45) NOT NULL,
  `start_date` DATE NOT NULL,
  `area` VARCHAR(45) NOT NULL,
  `duration` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `espa` TINYINT NOT NULL,
  `salary` INT NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `submitted` TINYINT NOT NULL,
  `companies_id` INT NOT NULL,
  `undergraduates_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_internship_companies1_idx` (`companies_id` ASC) VISIBLE,
  INDEX `fk_internship_undergraduates1_idx` (`undergraduates_id` ASC) VISIBLE,
  CONSTRAINT `fk_internship_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `sdi1600269`.`companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_internship_undergraduates1`
    FOREIGN KEY (`undergraduates_id`)
    REFERENCES `sdi1600269`.`undergraduates` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO internship
VALUES
    (1, 'Web Developer', 'Πληροφορική', 'ΕΚΠΑ', '2023-02-25', 'Αθήνα', 6, 'Πλήρης Απασχόλησης', 0, 600,
     'Η εταιρεία μας εξειδικεύεται στην ανάπτυξη λογισμικού για περισσότερα από 10 χρόνια! Κάθε χρόνο προτιμάται από τουλάχιστον 5 φοιτητές του τμήματος ΠΛηροφορικής.', 1, 2, null),
    (2, 'IT Support', 'Πληροφορική', 'Όλα τα πανεπιστήμια', '2023-03-05', 'Αθήνα', 3, 'Μερικής Απασχόλησης', 1, 250,
     'Η εταιρεία μας απασχολεί περισσότερους από 250 εργαζομένους όλων των ειδικοτήτων και προσφέρει ευχάριστα περιβάλλοντα εργασίας και πολλές δυνατότητες εξέλιξης!', 1, 4, null);


-- -----------------------------------------------------
-- Table `sdi1600269`.`undergraduates_has_internship`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sdi1600269`.`undergraduates_has_internship` ;

CREATE TABLE IF NOT EXISTS `sdi1600269`.`undergraduates_has_internship` (
  `undergraduates_id` INT NOT NULL,
  `internship_id` INT NOT NULL,
  `companies_id` INT NOT NULL,
  `description` MEDIUMTEXT NULL,
  `marks` MEDIUMBLOB NULL,
  `submitted` TINYINT NOT NULL,
  PRIMARY KEY (`undergraduates_id`, `internship_id`),
  INDEX `fk_undergraduates_has_internship_internship1_idx` (`internship_id` ASC) VISIBLE,
  INDEX `fk_undergraduates_has_internship_undergraduates1_idx` (`undergraduates_id` ASC) VISIBLE,
  INDEX `fk_undergraduates_has_internship_companies1_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_undergraduates_has_internship_undergraduates1`
    FOREIGN KEY (`undergraduates_id`)
    REFERENCES `sdi1600269`.`undergraduates` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_undergraduates_has_internship_internship1`
    FOREIGN KEY (`internship_id`)
    REFERENCES `sdi1600269`.`internship` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_undergraduates_has_internship_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `sdi1600269`.`companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
