import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutMyRootsInput } from './my-skills-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutMyRootsInput } from './my-skills-create-or-connect-without-my-roots.input';
import { MySkillsCreateManyMyRootsInputEnvelope } from './my-skills-create-many-my-roots-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';

@InputType()
export class MySkillsUncheckedCreateNestedManyWithoutMyRootsInput {

    @Field(() => [MySkillsCreateWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutMyRootsInput)
    create?: Array<MySkillsCreateWithoutMyRootsInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutMyRootsInput>;

    @Field(() => MySkillsCreateManyMyRootsInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManyMyRootsInputEnvelope)
    createMany?: MySkillsCreateManyMyRootsInputEnvelope;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    connect?: Array<MySkillsWhereUniqueInput>;
}
